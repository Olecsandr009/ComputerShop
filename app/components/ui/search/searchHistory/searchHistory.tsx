import { MdOutlineClose } from 'react-icons/md'
import styles from '../searchInput.module.scss'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { clearStorageData } from '../storage/clearStorageData'
import { getStorageData } from '../storage/getStorageData'
import { FC, useEffect, useState } from 'react'
import { deleteItemStorage } from '../storage/deleteItemStorage'

const SearchHistory:FC = () => {

	const [historyState, setHistoryState] = useState<string[]>([])

	useEffect(() => {
		setHistoryState(getStorageData('searchHistory'))
	}, [])

	function onDeleteHandler(e: any, element: string) {
		e.preventDefault()
		deleteItemStorage(element, "searchHistory")
	}

    return (
        <div className={styles.searchHistory}>
			<p className={styles.searchHistoryText}>Історія пошуку</p>

			<ul className={styles.searchHistoryList}>
				{historyState.map((element, index) => {
					return (
						<li className={styles.searchHistoryItem} key={index}>
							<Link href={`/products/${element}`}>
								<a className={styles.searchHistoryItemLink}>
									<BsSearch className={styles.searchHistoryIcon} />
									{element}
								</a>
							</Link>
							<button
								onClick={(e) => onDeleteHandler(e, element)}
								className={styles.searchHistoryDelete}
							>
								<MdOutlineClose />
							</button>
						</li>
					)
				})}
			</ul>

			<button
				onClick={(e) => clearStorageData("searchHistory")}
				className={styles.searchHistoryLinkB}
			>
				Очистити історію пошуку
			</button>
		</div>
    )
}

export default SearchHistory