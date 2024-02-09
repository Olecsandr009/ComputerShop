import { FC, useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { useOutside } from '../../../hooks/useOutside'

import styles from './Input.module.scss'

interface IInput {
	onChange: (data: any) => void
	value: any
	placeholder: string
	onError: boolean
	type?: string
	selectList?: string[]
	errorText?: string
}

const Input: FC<IInput> = ({
	onChange,
	value,
	placeholder,
	onError,
	type = 'text',
	selectList,
	errorText
}) => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [inputState, setInputState] = useState(false)
	const [btnEyeState, setBtnEyeState] = useState(false)

	function search(elem1: string, selectList: string[]): void {
		// Частина слова яка була введена в інпут
		const arr1 = elem1.split('')

		// Слово на якому потрібно зробити провірку
		// let arr2 = elem2.split('')

		// const arr3 = arr2.filter((el, i) => {
		// 	if (!arr1.includes(el)) {
		// 		arr2[i] = ''
		// 	}
		// })

		// let defaultIndex = 0

		// console.log(arr1, arr2)
		// //0           //0
		// function checkingArrays(index2: number) {
		// 	console.log(arr1[defaultIndex], arr2[index2])
		// 	if (arr1[defaultIndex] == arr2[index2]) {
		// 		console.log(1, true)

		// 		defaultIndex = defaultIndex + 1
		// 		index2 = index2 + 1

		// 		if (defaultIndex <= arr1.length) {
		// 			checkingArrays(index2)
		// 		} else {
		// 			return true
		// 		}
		// 	} else {
		// 		return false
		// 	}
		// }

		// for (let i = 0; i < arr2.length; i++) {
		// 	if (checkingArrays(i)) {
		// 		break
		// 	}
		// }
	}

	function onInputFunc(state: string) {
		state === 'focus'
			? setInputState(true)
			: value
			? undefined
			: setInputState(false)
	}

	useEffect(() => {
		if (!value) onInputFunc('blur')
		else {
			onInputFunc('focus')
		}

		if (type == 'select' && selectList) {
			// search(value, selectList[2])
		}
	}, [value])

	function btnEyeFunc(e: any) {
		setBtnEyeState(!btnEyeState)
		e.preventDefault()
	}

	function onChangeFunc(e: any) {
		if (type !== 'number') {
			onChange(e.target.value)
		} else {
			;+e.target.value || e.target.value === ''
				? onChange(e.target.value)
				: onChange(value)
		}
	}

	function onSelectItem(e: any, el: string) {
		e.preventDefault()
		setIsShow(false)
		onChange(el)
	}

	return (
		<label className={styles.label} ref={ref}>
			<div>
				<p
					className={`${
						inputState ? styles.inputTextActive : styles.inputTextNotActive
					} ${!onError ? '' : styles.error}`}
				>
					{placeholder}
				</p>
				<input
					type={
						type === 'password'
							? btnEyeState
								? 'text'
								: 'password'
							: type === 'number'
							? 'text'
							: type
					}
					onChange={onChangeFunc}
					onFocus={() => (onInputFunc('focus'), setIsShow(true))}
					onBlur={() => onInputFunc('blur')}
					className={`${!onError ? styles.input : styles.inputError} ${
						inputState ? 'bg-white' : 'bg-gray-50'
					}`}
					value={value}
				/>
			</div>
			{type === 'password' ? (
				<button onClick={btnEyeFunc} className={styles.button}>
					{!btnEyeState ? <AiFillEyeInvisible /> : <AiFillEye />}
				</button>
			) : undefined}

			{type === 'select' ? (
				<div
					className={`${styles.inputSelectModal} ${
						isShow ? styles.active : ''
					}`}
				>
					<ul className={styles.inputSelectList}>
						{selectList
							? selectList.map((el, index) => (
									<li key={index} className={styles.inputSelectItem}>
										<a
											className={styles.inputSelectLink}
											onClick={e => onSelectItem(e, el)}
											href='#'
										>
											{el}
										</a>
									</li>
							  ))
							: undefined}
					</ul>
				</div>
			) : undefined}

			{onError ? (
				<p className={styles.inputErrorText}>{errorText}</p>
			) : undefined}
		</label>
	)
}

export default Input
