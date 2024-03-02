import Link from 'next/link'
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'

import { useOutside } from '../../../hooks/useOutside'
import { useTheme } from '../../../hooks/useTheme'
import ButtonGreen from '../buttons/button-green/ButtonGreen'

import styles from './searchInput.module.scss'
import SearchHistory from './searchHistory/searchHistory'
import { addStorageData } from '../../../assets/storage/addStorageData'
import SearchResult from './searchResult/searchResult'
import { useRouter } from 'next/router'

const SearchInput = () => {
	const [inputValueState, setInputValueState] = useState('')

	const { theme, setTheme } = useTheme()

	const { ref, isShow, setIsShow } = useOutside(false)

	const inputRef = useRef<HTMLInputElement>(null)

	const router = useRouter()

	// Дабавляєм в сховище дані
	function onClickHandler(e:any) {
		setIsShow(false)
		addStorageData(inputValueState, "searchHistory")
		setInputValueState("")
	}

	function onSubmitHandler(e:any) {
		e.preventDefault()
		setIsShow(false)
		inputRef.current?.blur()

		addStorageData(inputValueState, "searchHistory")

		router.push(`/products/${inputValueState}`)

		setInputValueState("")
	}

	return (
		<>
			<form action='#' onSubmit={onSubmitHandler} className={styles.searchForm}>
				<label ref={ref} className={styles.searchLabel}>
					<input
						ref={inputRef}
						onFocus={(e) => setIsShow(true)}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setInputValueState(e.target.value)
						}
						className={styles.searchInput}
						style={{ borderColor: theme.primary }}
						placeholder='Пошук товарів'
						value={inputValueState}
					/>
					<div
						className={`${styles.searchModal} ${isShow ? styles.active : null}`}
					>
						{inputValueState ? (
							<SearchResult searchTerm={inputValueState}/>
						) : (
							<SearchHistory />
						)}
					</div>
				</label>
				<Link href={`/products/${inputValueState}`}>
					<ButtonGreen onClick={onClickHandler} option={'link'}>
						Найти
					</ButtonGreen>
				</Link>
			</form>
			<div
				className={`${styles.searchHistoryShadow} ${
					isShow ? styles.active : null
				}`}
			></div>
		</>
	)
}

export default SearchInput
