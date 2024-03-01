import Link from 'next/link'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import { useOutside } from '../../../hooks/useOutside'
import { useTheme } from '../../../hooks/useTheme'
import ButtonGreen from '../buttons/button-green/ButtonGreen'

import styles from './searchInput.module.scss'
import SearchHistory from './searchHistory/searchHistory'
import { addStorageData } from './storage/addStorageData'
import SearchResult from './searchResult/searchResult'

const SearchInput = () => {
	const [inputValueState, setInputValueState] = useState('')

	const { theme, setTheme } = useTheme()

	const { ref, isShow, setIsShow } = useOutside(false)

	// Дабавляєм в сховище дані
	function onClickHandler(e: MouseEvent) {
		setIsShow(false)

		addStorageData(inputValueState)
	}

	return (
		<>
			<form action='#' className={styles.searchForm}>
				<label ref={ref} className={styles.searchLabel}>
					<input
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
