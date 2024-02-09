import { useMutation } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'

import { AuthService } from '../../../../app/assets/services/auth.services'
import {
	IProfile,
	IUpdateProfile
} from '../../../../app/assets/services/interface/profile.interface'
import ButtonGrayBorder from '../../../../app/components/ui/buttons/button-gray-border/ButtonGrayBorder'
import ButtonGreen from '../../../../app/components/ui/buttons/button-green/ButtonGreen'
import Input from '../../../../app/components/ui/input/Input'
import Title from '../../../../app/components/ui/title/Title'

import styles from './ProfileUserData.module.scss'
import { monthList } from './data/monthList.data'

interface INewPersonalData {
	name: string
	firstname: string
	sex: string
	birthday: IBirthday
}

interface IBirthday {
	day: string
	month: string
	year: string
}

interface IInputError {
	name: boolean
	firstname: boolean
	day: boolean
	month: boolean
	year: boolean
	sex: boolean
}

const ProfileUserData: FC<{}> = ({}) => {
	//ProfileData
	const [profileState, setProfileState] = useState<IProfile>({} as IProfile)

	const [newPersonalDataState, setNewPersonalDataState] =
		useState<INewPersonalData>({
			birthday: {
				day: '',
				month: '',
				year: ''
			}
		} as INewPersonalData)

	const [inputPhoneState, setInputPhoneState] = useState('')
	const [inputEmailState, setInputEmailState] = useState('')
	const [inputErrorState, setInputErrorState] = useState<IInputError>({
		name: false,
		firstname: false,
		day: false,
		month: false,
		year: false,
		sex: false
	} as IInputError)

	const { mutate: profile } = useMutation(
		['profile'],
		() => AuthService.profile(),
		{
			onSuccess(data: IProfile) {
				setProfileState(data)
				const birthdaySplit = data.birthday.split('/')
				const birthday =
					data.birthday !== ''
						? {
								day: birthdaySplit[0],
								month: birthdaySplit[1],
								year: birthdaySplit[2]
						  }
						: { day: '', month: '', year: '' }
				setProfileState(data)
				console.log(birthday, 'birthday')
				setNewPersonalDataState({ ...data, birthday: { ...birthday } })
			}
		}
	)

	const { mutate: updateProfile } = useMutation(
		['updateProfile'],
		(data: IUpdateProfile) => AuthService.update(data),
		{
			onSuccess() {
				console.log('Update success')
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => profile(), [])

	useEffect(() => {}, [profileState])

	function removeUserData(e: any) {
		e.preventDefault()

		const birthdaySplit = profileState.birthday.split('/')
		const birthday =
			profileState.birthday !== ''
				? {
						day: birthdaySplit[0],
						month: birthdaySplit[1],
						year: birthdaySplit[2]
				  }
				: { day: '', month: '', year: '' }

		setNewPersonalDataState({ ...profileState, birthday: { ...birthday } })
	}

	function saveUserData(e: any) {
		e.preventDefault()

		const date = new Date()

		let errorSettings = {
			name: false,
			firstname: false,
			day: false,
			month: false,
			year: false
		}

		if (
			newPersonalDataState.birthday.day ||
			newPersonalDataState.birthday.month ||
			newPersonalDataState.birthday.year ||
			profileState.birthday
		) {
			!newPersonalDataState.birthday.day
				? (errorSettings.day = true)
				: (errorSettings.day = false)
			!newPersonalDataState.birthday.month
				? (errorSettings.month = true)
				: (errorSettings.month = false)
			!newPersonalDataState.birthday.year
				? (errorSettings.year = true)
				: (errorSettings.year = false)
		}

		newPersonalDataState.birthday.day &&
		(+newPersonalDataState.birthday.day < 1 ||
			+newPersonalDataState.birthday.day > 31)
			? (errorSettings.day = true)
			: undefined

		newPersonalDataState.birthday.year &&
		(+newPersonalDataState.birthday.year < date.getFullYear() - 200 ||
			+newPersonalDataState.birthday.year > date.getFullYear())
			? (errorSettings.year = true)
			: undefined

		!newPersonalDataState.name
			? (errorSettings.name = true)
			: (errorSettings.name = false)

		!newPersonalDataState.firstname
			? (errorSettings.firstname = true)
			: (errorSettings.firstname = false)

		setInputErrorState({
			...inputErrorState,
			name: errorSettings.name,
			firstname: errorSettings.firstname,
			day: errorSettings.day,
			month: errorSettings.month,
			year: errorSettings.year
		})

		if (
			!errorSettings.day &&
			!errorSettings.firstname &&
			!errorSettings.name &&
			!errorSettings.month &&
			!errorSettings.year
		) {
			updateProfile({ ...profileState, ...newPersonalDataState })
		}
	}

	return (
		<>
			{profileState ? (
				<form action='#' className={styles.profileUserForm}>
					<div className={styles.profileUserContent}>
						<Title>Особисті дані</Title>
						<p className={styles.profileUserSubTitle}>
							Персональна інформація потрібна для офрмлення замовлення, а також
							отримання бонусів і подарунків на День народження
						</p>
						<div className={styles.profileUserData}>
							<Input
								onChange={(data: string) =>
									setNewPersonalDataState({
										...newPersonalDataState,
										name: data
									})
								}
								value={newPersonalDataState.name}
								placeholder="Ім'я"
								onError={inputErrorState.name}
							/>
							<Input
								onChange={(data: string) =>
									setNewPersonalDataState({
										...newPersonalDataState,
										firstname: data
									})
								}
								value={newPersonalDataState.firstname}
								placeholder='Прізвище'
								onError={inputErrorState.firstname}
							/>
						</div>
						<div className={styles.profileUserData}>
							<div className={styles.profileUserDataBlock}>
								<h3 className={styles.profileUserDataTitle}>Стать</h3>
								<div className={styles.profileUserDataRadioButtons}>
									<button
										className={`${styles.profileUserDataRadioBtn} ${
											newPersonalDataState
												? newPersonalDataState.sex == ''
													? ''
													: newPersonalDataState.sex == 'woman'
													? styles.active
													: ''
												: undefined
										}`}
										onClick={e => {
											e.preventDefault()
											setNewPersonalDataState({
												...newPersonalDataState,
												sex: 'woman'
											})
										}}
									>
										Жінка
									</button>
									<button
										className={`${styles.profileUserDataRadioBtn} ${
											newPersonalDataState
												? newPersonalDataState.sex == ''
													? ''
													: newPersonalDataState.sex == 'man'
													? styles.active
													: ''
												: undefined
										}`}
										onClick={e => {
											e.preventDefault()
											setNewPersonalDataState({
												...newPersonalDataState,
												sex: 'man'
											})
										}}
									>
										Чоловік
									</button>
								</div>
							</div>

							<div className={styles.profileUserDataBlock}>
								<h3 className={styles.profileUserDataTitle}>Дата народження</h3>
								<div className={styles.profileUserDataInputs}>
									<Input
										onChange={(data: number) =>
											setNewPersonalDataState({
												...newPersonalDataState,
												birthday: {
													...newPersonalDataState.birthday,
													day: data.toString()
												}
											})
										}
										type='number'
										value={newPersonalDataState.birthday.day}
										placeholder='Day'
										onError={inputErrorState.day}
									/>
									<Input
										onChange={(data: string) =>
											setNewPersonalDataState({
												...newPersonalDataState,
												birthday: {
													...newPersonalDataState.birthday,
													month: data
												}
											})
										}
										value={newPersonalDataState.birthday.month}
										type='select'
										selectList={monthList}
										placeholder='Month'
										onError={inputErrorState.month}
									/>
									<Input
										onChange={(data: number) =>
											setNewPersonalDataState({
												...newPersonalDataState,
												birthday: {
													...newPersonalDataState.birthday,
													year: data.toString()
												}
											})
										}
										type='number'
										value={newPersonalDataState.birthday.year}
										placeholder='Year'
										onError={inputErrorState.year}
									/>
								</div>
							</div>
						</div>
						<div className={styles.profileSaveButtons}>
							<ButtonGreen onClick={saveUserData}>Зберегти</ButtonGreen>
							<ButtonGrayBorder onClick={removeUserData}>
								відмінити
							</ButtonGrayBorder>
						</div>
					</div>
					<div className={styles.profileUserContent}>
						<Title>Контакти</Title>
						<div className={styles.profileUserData}>
							<div className={styles.profileUserDataBlock}>
								<div className={styles.profileUserDataInputsTel}>
									<select />
									<Input
										onChange={setInputPhoneState}
										placeholder='Phone'
										value={inputPhoneState}
										onError={false}
									/>
								</div>
								<a className={styles.profileUserDataLink} href='#'>
									Підтвердити номер телефона
								</a>
							</div>
							<div className={styles.profileUserDataBlock}>
								<Input
									onChange={setInputEmailState}
									value={inputEmailState}
									placeholder='Email'
									onError={false}
								/>
								<a className={styles.profileUserDataLink} href='#'>
									<MdOutlineEdit />
									Змінити ел.пошту
								</a>
							</div>
						</div>
					</div>
					<div className={styles.profileUserContent}>
						<Title>Адреса доставок</Title>
						<div className={styles.profileUserData}>
							<div className={styles.profileUserDataBlock}>
								<p className={styles.profileUserSubTitle}>
									Сохраните адрес для доставки и вы сможете быстро выбрать его
									при оформлении заказа
								</p>
								<ButtonGreen>Добавить адрес</ButtonGreen>
							</div>
						</div>
					</div>
					<div className={styles.profileUserContent}>
						<Title>Дополнительная информация</Title>
						<div className={styles.profileUserData}>
							<div className={styles.profileUserDataBlock}>
								<p className={styles.profileUserSubTitle}>
									Расскажите немного о себе, чтобы мы могли вам подобрать
									интересные товары
								</p>
							</div>
						</div>
					</div>
					// Spolers
				</form>
			) : (
				<div>LogIn please</div>
			)}
		</>
	)
}

export default ProfileUserData
