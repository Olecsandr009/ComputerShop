import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { ImExit } from 'react-icons/im'
import { IoIosArrowDown } from 'react-icons/io'

import { AuthService } from '../../../../../assets/services/auth.services'
import { useAuth } from '../../../../../hooks/useAuth'
import { useOutside } from '../../../../../hooks/useOutside'
import Login from '../../../popups/login/Login'

import { ProfileModalData } from './data/ProfileModal.data'
import styles from './loginProfile.module.scss'

interface ILogin {
	email: string
	password: string
}

const LoginProfile = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const { user, setUser } = useAuth()

	const { mutate: logout } = useMutation(
		['logout'],
		() => AuthService.logout(),
		{
			onSuccess() {
				console.log('success')
			}
		}
	)

	function logoutFunction(e: any) {
		e.preventDefault()

		logout()
		setUser(null)
	}

	return (
		<div
			className={`${styles.login} ${
				isShow ? 'overflow-hidden' : 'overflow-none'
			}`}
		>
			{user ? (
				<div className={styles.loginProfileWrapper}>
					<div className={styles.loginProfileLink}>
						<div className={styles.loginProfileMedia}>
							<img src={user.ava} />
						</div>
						{user.firstname} {user.name}
						<IoIosArrowDown />
					</div>
					<div className={styles.loginProfileModal}>
						<ul className={styles.loginProfileList}>
							{ProfileModalData.map((el, index) => {
								return (
									<li key={index} className={styles.loginProfileItem}>
										<Link href={el.link}>
											<a className={styles.loginProfileItemLink}>{el.name}</a>
										</Link>
									</li>
								)
							})}
						</ul>
						<div className={styles.loginProfileBorder}></div>
						<button
							onClick={logoutFunction}
							className={styles.loginProfileExit}
						>
							<ImExit />
							Вийти
						</button>
					</div>
				</div>
			) : (
				<a
					onClick={e => {
						e.preventDefault()
						setIsShow(true)
					}}
					href='#'
					className='flex items-center text-xs text-black gap-2 pr-5 border-r border-gray-400'
				>
					<FiUser className='text-base' />
					Вхід у власний кабінет
				</a>
			)}
			<Login ref={ref} isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default LoginProfile
