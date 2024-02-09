import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { SlBasket } from 'react-icons/sl'

import { IProduct } from '../../../../../assets/services/interface/product.interface'
import { ProductsServices } from '../../../../../assets/services/products.services'
import { usePrice } from '../../../../../hooks/usePrice'
import { useQuantity } from '../../../../../hooks/useQuantity'
import ButtonGreen from '../../../buttons/button-green/ButtonGreen'

import styles from './Basket.module.scss'

const Basket = () => {
	const { quantity, increase, reduce } = useQuantity(3)
	const [productState, setProductState] = useState<IProduct[]>({} as IProduct[])
	const { getPrice } = usePrice('function')

	const { mutate: product } = useMutation(
		['getProduct'],
		() => ProductsServices.getProducts(),
		{
			onSuccess(data) {
				setProductState(data)
			}
		}
	)

	useEffect(() => {
		product()
	}, [])

	return (
		<div className={styles.basket}>
			<Link href={''}>
				<a className={styles.basketButton}>
					<SlBasket />
				</a>
			</Link>
			<div className={styles.basketModal}>
				<h3 className={styles.basketTitle}>
					Корзина <span>(6)</span>
				</h3>
				<ul className={styles.basketList}>
					{productState[0] ? (
						<li className={styles.basketItem}>
							<button className={styles.basketDel}>
								<IoMdClose />
							</button>
							<div className={styles.basketMedia}>
								<Image
									loader={() => productState[0].image[0]}
									src={'image.jpg'}
									alt='Product'
									layout='fill'
									// width={70}
									// height={70}
								/>
							</div>
							<div className={styles.basketContent}>
								<Link
									href={`/product/${
										productState[0]
											? productState[0].slug.split(' ').join('_')
											: undefined
									}`}
								>
									<a className={styles.basketName}>{productState[0].model}</a>
								</Link>
								<div className={styles.basketData}>
									<div className={styles.basketPrice}>
										<p className={styles.basketDiscount}>1200</p>
										<p className={styles.basketValue}>1000</p>
									</div>
									<div className={styles.basketQuantity}>
										<button onClick={reduce} className={styles.basketReduce}>
											-
										</button>
										<input value={quantity} className={styles.basketInput} />
										<button
											onClick={increase}
											className={styles.basketIncrease}
										>
											+
										</button>
									</div>
									<p className={styles.basketValue}>
										{productState[0]
											? +productState[0].price * quantity
											: undefined}{' '}
										грн
									</p>
								</div>
							</div>
						</li>
					) : undefined}
				</ul>
				<div className={styles.basketAllPrice}>
					<p className={styles.basketText}>Сума замовлення</p>
					<p className={styles.basketValue}>12430 грн</p>
				</div>
				<Link href={'/'}>
					<ButtonGreen option='link' className='uppercase justify-center'>
						Оформити замовлення
					</ButtonGreen>
				</Link>
				<Link href={'/'}>
					<a className={styles.basketLink}>Перейти в корзину</a>
				</Link>
			</div>
		</div>
	)
}

export default Basket
