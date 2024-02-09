import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from 'react'

import { AuthService } from '../../services/auth.services'
import { IProfile } from '../../services/interface/profile.interface'

interface IAuth {
	user: IProfile | null
	setUser: Dispatch<SetStateAction<IProfile | null>>
}

export const AuthContext = createContext<IAuth>({} as IAuth)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<IProfile | null>(null)
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')

		if (accessToken) {
			const userStringify = localStorage.getItem('user')

			const user = userStringify ? JSON.parse(userStringify) : undefined

			setUser(user)
		}
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')

		if (!accessToken && !user) {
			AuthService.logout()
			setUser(null)
		}
	}, [pathname])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
