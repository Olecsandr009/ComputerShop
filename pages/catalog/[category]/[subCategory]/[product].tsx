import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { INameChild } from '../../../../app/assets/services/interface/name.interface'
import { NameServices } from '../../../../app/assets/services/name.services'
import Header from '../../../../app/components/ui/Layout/header/Header'
import Sidebar from '../../../../app/components/ui/Layout/sidebar/sidebar'
import BreadCrumbs from '../../../../app/components/ui/bread-crumbs/bread-crumbs'
import ButtonGreen from '../../../../app/components/ui/buttons/button-green/ButtonGreen'
import { Container } from '../../../../app/components/ui/container/Container'
import Stars from '../../../../app/components/ui/reviews/stars'
import styles from '../product.module.scss'

const Product = () => {
	const router = useRouter()
	const [allNameByName, setAllNameByName] = useState<INameChild[]>(
		[] as INameChild[]
	)

	const { mutate: getNameChildByName } = useMutation(
		['getNameChildByName'],
		(name: string) => NameServices.getNameChildByName(name),
		{
			onSuccess(data: INameChild[]) {
				setAllNameByName(data)
				console.log(allNameByName, '[product]')
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => {
		const currentURL = Array.isArray(router.query.product)
			? router.query.product[0]
			: router.query.product || ''

		getNameChildByName(currentURL.split('_').join(' '))
	}, [router.query.product])

	function getPrice(price: string, discount: string = '') {
		if (discount) {
			const discountPriceValue = (parseInt(price) * (parseInt(discount) / 100))
				.toString()
				.split('.')[0]
			const discountPrice = (parseInt(price) - parseInt(discountPriceValue))
				.toString()
				.split('.')[0]

			return (
				<>
					<p className={styles.productsItemDiscount}>{price} грн</p>
					<p className={styles.productsItemPrice}>{discountPrice} грн</p>
				</>
			)
		} else {
			return <p className={styles.productsItemPrice}>{price} грн</p>
		}
	}

	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['category', 'product']} />

			<Container className={styles.productContainer}>
				<div>
					<Sidebar />
				</div>
				<div className={styles.productBody}>
					<div className={styles.productTop}>
						<div className={styles.productTopTitle}>
							<h2 className={styles.productTopTitleText}>
								{router.query.product?.toString().split('_').join(' ')}
							</h2>

							<div className={styles.productSort}>
								<p className={styles.productSortText}>Сортувати</p>
								<select className={styles.productSortSelect}>
									<option>По рейтингу</option>
								</select>
							</div>
						</div>
						<p className={styles.productCatalogLength}>
							<span className={styles.productCatalogSpan}>В каталозі</span>
							{allNameByName.length} товарів
						</p>
					</div>
					<div className={styles.products}>
						<ul className={styles.productsList}>
							{allNameByName.length
								? allNameByName[0].product.map((element, index) => {
										return (
											<li key={index} className={styles.productsItem}>
												<div>
													<div className={styles.productsItemImage}>
														<img src={element.image[0]} alt='Product' />
													</div>
													<div className={styles.productsItemContent}>
														<Link
															href={`/product/${element.slug
																.split(' ')
																.join('_')}`}
														>
															<a className={styles.productsItemName}>
																{router.query.product
																	?.toString()
																	.split('_')
																	.join(' ')}{' '}
																"{element.model}"
															</a>
														</Link>
														<div className={styles.productsItemRating}>
															<Stars reviews={5} />
															<p className={styles.productsItemArticle}>
																Артикул: {element.article}
															</p>
														</div>
														<div className={styles.productsItemBottom}>
															<div className={styles.productsItemPriceWrapper}>
																{getPrice(element.price, element.discount)}
															</div>
															<ButtonGreen
																className={styles.productsItemPriceSend}
															>
																<AiOutlineShoppingCart />
															</ButtonGreen>
														</div>
													</div>
												</div>
											</li>
										)
								  })
								: undefined}
						</ul>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Product
