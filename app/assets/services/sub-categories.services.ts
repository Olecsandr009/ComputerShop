import { axiosClasses } from '../interceptor'

import { ICreateSubCategory } from './interface/subCategory.interface'

export const SubCategoryServices = {
	async createSubCategory(data: ICreateSubCategory) {
		const response = await axiosClasses.post(
			'/sub-category/create-sub-category',
			{
				...data
			}
		)

		return response.data
	},

	async getSubCategories() {
		const response = await axiosClasses.get('/sub-category/get-sub-categories')

		return response.data
	},

	async getSubCategoriesChild() {
		const response = await axiosClasses.get(
			'/sub-category/get-sub-categories-child'
		)

		return response.data
	},

	async searchCategories(searchTerm: string) {
		const response = await axiosClasses.get(
			`/sub-category/search/${searchTerm}`
		)

		return response.data
	},

	async getCategoriesChildByName(name: string) {
		const response = await axiosClasses.get(`/sub-category/${name}`)

		return response.data
	},

	async getSubCategoriesByCount(count: number) {
		const response = await axiosClasses.get(
			`/sub-category/get-sub-categories/${count}`
		)

		return response.data
	}
}
