import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { AuthService } from '../../../app/assets/services/auth.services'

import styles from './ProfileSaitbar.module.scss'
import { ProfileSidebarData } from './ProfileSidebar.data'

interface IProfile {
	_id: number
	ava: string
	birthday: string
	category: string
	email: string
	firstname: string
	live: string
	name: string
	phone: number
	sex: string
	status: string
}

const ProfileSaitbar: FC<{}> = ({}) => {
	const [profileState, setProfileState] = useState<IProfile | undefined>(
		{} as IProfile
	)

	const { mutate: profile } = useMutation(
		['profile'],
		() => AuthService.profile(),
		{
			onSuccess(data) {
				setProfileState(data)
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	const { mutate: logout } = useMutation(
		['logout'],
		() => AuthService.logout(),
		{
			onSuccess() {
				console.log('success')
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	const router = useRouter()

	function logoutFunction(e: any) {
		e.preventDefault()

		logout()
	}

	useEffect(() => profile(), [])

	return (
		<aside className={styles.saitbar}>
			<div className={styles.mainSaitbar}>
				<div className={styles.saitbarUserData}>
					<div className={styles.saitbarUserAva}>
						<img
							className={styles.saitbarImage}
							src={profileState?.ava}
							alt='Ava'
						/>
					</div>
					<p className={styles.saitbarName}>
						{profileState
							? profileState.name + ' ' + profileState.firstname
							: 'Please to Auth'}
					</p>
				</div>
				<ul className={styles.saitbarUserList}>
					{ProfileSidebarData.map((el, index) => {
						return (
							<li key={index} className={styles.saitbarUserItem}>
								<Link href={el.link}>
									<a
										className={`${styles.saitbarItemLink} ${
											router.pathname === el.link ? styles.active : ''
										}`}
									>
										<p className={styles.saitbarLinkName}>{el.name}</p>
										{el.message ? (
											<span
												className={`${styles.saitbarLinkCount} ${
													el.flag == 'bonuses' ? styles.bonus : ''
												}`}
											>
												7
											</span>
										) : undefined}
									</a>
								</Link>
							</li>
						)
					})}
				</ul>
				<div className={styles.saitbarUserBottom}>
					<a className={styles.saitbarLogout} onClick={logoutFunction} href='#'>
						<img
							className={styles.saitbarIcon}
							src='/img/logout.svg'
							alt='Logout icon'
						/>
						<span className={styles.saitbarLogoutText}>Вийти</span>
					</a>
					<a className={styles.saitbarPassword} href='#'>
						Змінити пароль
					</a>
				</div>
			</div>
		</aside>
	)
}

export default ProfileSaitbar
