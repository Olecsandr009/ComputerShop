import { axiosClasses } from '../interceptor'

import { ICreateProduct } from './interface/product.interface'

export const ProductsServices = {
	async getProducts() {
		const response = await axiosClasses.get('/product/getAllProducts')

		return response.data
	},

	async getProductsBySlug(slug: string) {
		const response = await axiosClasses.get(`/product/${slug}`)
		return response.data
	},

	async createProduct({ ...data }: ICreateProduct) {
		const response = await axiosClasses.post('/product/createProduct', {
			...data
		})

		return response.data
	},

	async searchProduct(searchTerm: string) {
		const response = await axiosClasses.get(`/product/search/${searchTerm}`)

		return response.data
	},

	async getEnumProductStatus() {
		const response = await axiosClasses.get('/get-enum-product-status')

		return response.data
	},

	async getEnumProductFlags() {
		const response = await axiosClasses.get('/get-enum-product-flags')

		return response.data
	}
}
