import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import {
	Dispatch,
	FC,
	LegacyRef,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import { CgClose } from 'react-icons/cg'

import { AuthService } from '../../../../assets/services/auth.services'
import { IProfile } from '../../../../assets/services/interface/profile.interface'
import { useAuth } from '../../../../hooks/useAuth'
import ButtonGreen from '../../buttons/button-green/ButtonGreen'
import Input from '../../input/Input'
import Register from '../register/Register'

interface ILogin {
	email: string
	password: string
}

interface IProps {
	ref: LegacyRef<HTMLDivElement> | null
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

const Login: FC<IProps> = ({ ref, isShow, setIsShow }) => {
	const [loginState, setLoginState] = useState<ILogin>({} as ILogin)
	const { user, setUser } = useAuth()

	const [statusCodeState, setStatusCodeState] = useState(0)
	const [isError, setIsError] = useState(false)

	const { mutate: login } = useMutation(
		['login'],
		(data: any) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				profile()
				setIsShow(false)
			},
			onError(data: any) {
				setStatusCodeState(data.response.status)
			}
		}
	)

	const { mutate: profile } = useMutation(
		['profile'],
		() => AuthService.profile(),
		{
			onSuccess(data: IProfile) {
				const accessToken = Cookies.get('accessToken')

				accessToken ? setUser(data) : undefined
			},
			onError(data: any) {
				// setStatusCodeState(data.response.status)
			}
		}
	)

	useEffect(() => {
		if (statusCodeState === 401) {
			setIsError(true)
			setLoginState({ ...loginState, email: '' })
			setLoginState({ ...loginState, password: '' })
		} else {
			setIsError(false)
		}
	}, [statusCodeState])

	function onSubmit(e: any) {
		const data = { email: loginState.email, password: loginState.password }
		e.preventDefault()
		login(data)
		setStatusCodeState(0)
		setLoginState({ email: '', password: '' })
	}

	return (
		<>
			<div
				className={`absolute z-50 top-0 left-0 w-[100vw] h-[100vh] ${
					isShow ? 'pointer-events-auto' : 'pointer-events-none'
				}`}
			>
				<div
					onClick={() => setIsShow(false)}
					className={`absolute w-full h-full top-0 left-0 transition-all bg-[rgba(47,47,47,0.5)] z-40 backdrop-blur-[2.5px] ${
						isShow
							? 'opacity-100 pointer-events-auto'
							: 'opacity-0 pointer-events-none'
					}`}
				></div>
				<div
					ref={ref}
					className={` max-w-5xl w-[512px] top-1/2 transition-all left-1/2 -translate-x-1/2 z-50 bg-white p-8 absolute ${
						isShow
							? 'opacity-100 pointer-events-auto -translate-y-1/2'
							: 'opacity-0 pointer-events-none -translate-y-full'
					}`}
				>
					<button
						onClick={() => setIsShow(false)}
						className='w-4 h-4 absolute top-8 right-8 text-gray-400 hover:text-gray-900'
					>
						<CgClose />
					</button>
					<h4 className='text-center font-bold text-lg text-black py-5'>
						Вхід у власний кабінет
					</h4>

					<div className='w-full'>
						<form action='#' className='w-full'>
							<div className='flex flex-col '>
								<Input
									onChange={(data: string) =>
										setLoginState({ ...loginState, email: data })
									}
									value={loginState.email}
									onError={isError}
									placeholder='Эл. почта'
								/>
								<Input
									onChange={(data: string) =>
										setLoginState({ ...loginState, password: data })
									}
									value={loginState.password}
									onError={isError}
									placeholder='Пароль'
									type='password'
								/>
								<div className='flex justify-end'>
									<a
										href='#'
										className='text-sm underline text-gray-600 p-2 mb-3 hover:no-underline'
									>
										Забули пароль?
									</a>
								</div>
								<ButtonGreen
									onClick={onSubmit}
									className='mb-5 flex justify-center pb-3 pt-3 uppercase'
								>
									увійти
								</ButtonGreen>
							</div>
						</form>
						<Register />
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
