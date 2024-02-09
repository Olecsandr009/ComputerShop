import axios from 'axios'
import Cookies from 'js-cookie'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const getFileType = () => ({
	'Content-Type': 'multipart/form-data'
})

export const axiosClasses = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: getContentType(),
	withCredentials: false
})

export const axiosClassesFile = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: getFileType(),
	withCredentials: false
})

export const instance = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: getContentType(),
	withCredentials: false
})

instance.interceptors.request.use(response => {
	const accessToken = Cookies.get('accessToken')

	if (accessToken && response.headers) {
		response.headers.Authorization = `Bearer ${accessToken}`
	}

	return response
})
