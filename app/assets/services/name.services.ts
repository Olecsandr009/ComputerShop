import { axiosClasses } from '../interceptor'

import { ICreateName } from './interface/name.interface'

export const NameServices = {
	async createName(data: ICreateName) {
		const response = await axiosClasses.post('/name/create-name', { ...data })

		return response.data
	},

	async getNames() {
		const response = await axiosClasses.get('/name/get-names')

		return response.data
	},

	async getNamesChild() {
		const response = await axiosClasses.get('/name/get-names-child')

		return response.data
	},

	async getNameChildByName(name: string) {
		const response = await axiosClasses.get(`/name/${name}`)

		return response.data
	},

	async deleteName() {
		const response = await axiosClasses.get('/name/delete-name')

		return response.data
	}
}
