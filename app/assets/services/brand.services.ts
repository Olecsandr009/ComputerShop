import { axiosClasses } from '../interceptor'

import { ICreateBrand } from './interface/brand.interface'

export const BrandServices = {
	async createBrand(data: ICreateBrand) {
		const response = await axiosClasses.post('/brand/create-brand', { ...data })

		return response.data
	},

	async getBrands() {
		const response = await axiosClasses.get('/brand/get-brands')

		return response.data
	}
}
