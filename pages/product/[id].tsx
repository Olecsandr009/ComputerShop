import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { IProduct } from '../../app/assets/services/interface/product.interface'
import { ProductsServices } from '../../app/assets/services/products.services'
import Header from '../../app/components/ui/Layout/header/Header'
import BreadCrumbs from '../../app/components/ui/bread-crumbs/bread-crumbs'
import { Container } from '../../app/components/ui/container/Container'
import Reviews from '../../app/components/ui/reviews/reviews'

import styles from './products.module.scss'
import Tabs from './tabs/tabs'

const Products = () => {
	const router = useRouter()
	const [product, setProduct] = useState<IProduct>({} as IProduct)
	const [isLoading, setIsLoading] = useState(false)

	const { mutate: getProductBySlug } = useMutation(
		['getProductBySlug'],
		(slug: string) => ProductsServices.getProductsBySlug(slug),
		{
			onSuccess(data: IProduct) {
				setProduct(data)
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => {
		const currentURL = Array.isArray(router.query.id)
			? router.query.id[0]
			: router.query.id || ''

		getProductBySlug(currentURL)
	}, [router.query.id])

	useEffect(() => {
		product ? setIsLoading(true) : undefined
		if (product && product._id) {
			setIsLoading(true)
		}
	}, [product])

	return (
		<>
			{isLoading && product ? (
				<section>
					<Header />
					<BreadCrumbs breadSettings={[product.model, product.model]} />
					<Container>
						<h1
							className={styles.productsTitle}
						>{`${product.model} «${product.model}»`}</h1>
						<Reviews reviews={5} reviewsLength={5} article={product.article} />
					</Container>
					<Tabs />
				</section>
			) : (
				<p>Loading</p>
			)}
		</>
	)
}

export default Products
