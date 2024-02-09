import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { IProduct } from '../../app/assets/services/interface/product.interface'
import { ProductsServices } from '../../app/assets/services/products.services'
import Header from '../../app/components/ui/Layout/header/Header'
import BreadCrumbs from '../../app/components/ui/bread-crumbs/bread-crumbs'
import { Container } from '../../app/components/ui/container/Container'

const Products = () => {
	const [allProductsState, setAllProductsState] = useState<IProduct[]>(
		{} as IProduct[]
	)
	const router = useRouter()
	const currentRouter = router.query.id ? router.query.id.toString() : undefined

	const { mutate: getProducts } = useMutation(
		['getProducts'],
		() => ProductsServices.getProducts(),
		{
			onSuccess(data: IProduct[]) {
				setAllProductsState(data)
			},
			onError(data) {
				console.log(data)
			}
		}
	)

	useEffect(() => {
		getProducts()
	}, [])

	function getCurrentProducts() {
		return allProductsState.length
			? allProductsState.map((element, index) => {
					if (
						element.model
							.toUpperCase()
							.indexOf(currentRouter ? currentRouter.toUpperCase() : '') >= 0
					) {
						return <div key={index}>{element.model}</div>
					}
			  })
			: undefined
	}

	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['categories']} />
			<Container>
				<div>
					<div>Фільтр товарів</div>
					<div>
						<div>{router.query.id}</div>
						<div>{getCurrentProducts()}</div>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Products
