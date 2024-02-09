import { axiosClasses, instance } from '../interceptor'

import {
	removeTokenToCookies,
	removeUserRoLocalStorage,
	setTokenToCookies,
	setUserToLocalStorage
} from './auth.helper'
import { IUpdateProfile } from './interface/profile.interface'

export const AuthService = {
	async login(username: string, password: string) {
		const response = await axiosClasses.post('/auth/login', {
			username,
			password
		})

		if (response.data['access_token']) {
			setTokenToCookies(response.data)
		}

		return response.data
	},

	async register(
		email: string,
		name: string,
		firstname: string,
		password: string
	) {
		const response = await axiosClasses.post('/auth/register', {
			email,
			name,
			firstname,
			password
		})

		return response.data
	},

	async profile() {
		try {
			const response = await instance.get('/profile')

			if (response.data) {
				setUserToLocalStorage(response.data)
			}

			return response.data
		} catch (error) {}
	},

	async update(data: IUpdateProfile) {
		const response = await axiosClasses.post('auth/update', {
			...data,
			birthday: `${data.birthday.day}/${data.birthday.month}/${data.birthday.year}`
		})

		return response.data
	},

	async logout() {
		removeTokenToCookies()
		removeUserRoLocalStorage()
	}
}
