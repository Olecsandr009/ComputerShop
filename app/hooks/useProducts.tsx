import { ProductsServices } from '../assets/services/products.services'

export const useProducts = () => {
	const products = ProductsServices.getProducts()

	return products
}
