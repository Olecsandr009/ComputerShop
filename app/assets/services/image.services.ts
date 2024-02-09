import { axiosClasses, axiosClassesFile } from '../interceptor'

export const ImageServices = {
	async createImage(image: any) {
		const response = await axiosClassesFile.post('/create-image', image)

		return response.data
	},

	async getImage(_id: number) {
		const response = await axiosClasses.get('/get-image')

		return response.data
	}
}
