import Cookies from 'js-cookie'

export const setTokenToCookies = (data: any) => {
	Cookies.set('accessToken', data['access_token'], { sameSite: 'none' })
}

export const removeTokenToCookies = () => {
	Cookies.remove('accessToken')
}

export const setUserToLocalStorage = (data: any) => {
	localStorage.setItem('user', JSON.stringify(data))
}

export const removeUserRoLocalStorage = () => {
	localStorage.removeItem('user')
}
