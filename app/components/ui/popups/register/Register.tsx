import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'

import { AuthService } from '../../../../assets/services/auth.services'
import { useOutside } from '../../../../hooks/useOutside'
import ButtonGreen from '../../buttons/button-green/ButtonGreen'
import Input from '../../input/Input'

import styles from './Register.module.scss'

interface IRegister {
	name: string
	firstname: string
	email: string
	password: string
}

const Register = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [registerState, setRegisterState] = useState<IRegister>({} as IRegister)

	const [statusCodeState, setStatusCodeState] = useState(0)
	const [isError, setIsError] = useState(false)

	const { mutate: register } = useMutation(
		['register'],
		(data: any) =>
			AuthService.register(
				data.email,
				data.name,
				data.firstname,
				data.password
			),
		{
			onSuccess(data) {
				console.log(data)
			},
			onError(data: any) {
				setStatusCodeState(data.response.status)
			}
		}
	)

	function onSubmit(e: any) {
		const data = {
			email: registerState.email,
			name: registerState.name,
			firstname: registerState.firstname,
			password: registerState.password
		}
		e.preventDefault()
		register(data)
		setStatusCodeState(0)
		setRegisterState({
			name: '',
			firstname: '',
			email: '',
			password: ''
		})
	}

	return (
		<div className={styles.register}>
			<button onClick={() => setIsShow(true)} className={styles.btnClose}>
				Зарегистрироваться
			</button>

			<div
				className={`absolute w-full h-full top-0 transition-all left-0 bg-[rgba(47,47,47,0.5)] z-40 backdrop-blur-[2.5px] ${
					isShow
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			></div>
			<div
				ref={ref}
				className={`${styles.popup} ${isShow ? styles.active : ''}`}
			>
				<button
					onClick={() => setIsShow(false)}
					className='w-4 h-4 absolute top-8 right-8 text-gray-400 hover:text-gray-900'
				>
					<CgClose />
				</button>
				<div>
					<h2 className=' font-bold text-lg text-black text-center mb-10'>
						Регистрация
					</h2>

					<form action='#'>
						<div className='flex flex-col'>
							<Input
								onChange={(data: string) =>
									setRegisterState({ ...registerState, name: data })
								}
								value={registerState.name}
								onError={isError}
								placeholder='Имя'
							/>
							<Input
								onChange={(data: string) =>
									setRegisterState({ ...registerState, firstname: data })
								}
								value={registerState.firstname}
								onError={isError}
								placeholder='Фамилия'
							/>
							<Input
								onChange={(data: string) =>
									setRegisterState({ ...registerState, email: data })
								}
								value={registerState.email}
								onError={isError}
								placeholder='Эл.почта'
							/>
							<Input
								onChange={(data: string) =>
									setRegisterState({ ...registerState, password: data })
								}
								value={registerState.password}
								onError={isError}
								placeholder='Придумайте пароль'
								type='password'
							/>

							<ButtonGreen
								onClick={onSubmit}
								className='w-full flex justify-center pt-3 uppercase pb-3 mb-5'
							>
								Зарегистрироваться
							</ButtonGreen>
							<button
								onClick={e => {
									e.preventDefault()
									setIsShow(false)
								}}
								className='underline text-gray-700 hover:no-underline'
							>
								Я уже зарегистрирован
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
