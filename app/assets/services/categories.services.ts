import { axiosClasses } from '../interceptor'

import { ICreateCategory } from './interface/category.interface'

export const CategoriesServices = {
	async createCategory(data: ICreateCategory) {
		const response = await axiosClasses.post('/category/create-category', {
			...data
		})

		return response.data
	},

	async getCategories() {
		const response = await axiosClasses.get('/category/get-categories')

		return response.data
	},

	async getCategoriesChild() {
		const response = await axiosClasses.get('/category/get-child-categories')

		return response.data
	},

	async searchCategories(searchTerm: string) {
		const response = await axiosClasses.get(`/category/search/${searchTerm}`)

		return response.data
	},

	async getCategoriesChildByName(name: string) {
		const response = await axiosClasses.get(`/category/${name}`)

		return response.data
	}
}
