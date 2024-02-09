import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { BsChevronRight, BsSearch } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'

import { CategoriesServices } from '../../../assets/services/categories.services'
import { ICategory } from '../../../assets/services/interface/category.interface'
import { IProduct } from '../../../assets/services/interface/product.interface'
import { ProductsServices } from '../../../assets/services/products.services'
import { useOutside } from '../../../hooks/useOutside'
import { useTheme } from '../../../hooks/useTheme'
import ButtonGreen from '../buttons/button-green/ButtonGreen'

import styles from './searchInput.module.scss'

const SearchInput = () => {
	const [inputValueState, setInputValueState] = useState('')
	const [searchHistoryState, setSearchHistoryState] = useState([] as string[])
	const [searchProductsState, setSearchProductsState] = useState<IProduct[]>(
		[] as IProduct[]
	)
	const [searchCategoriesState, setSearchCategoriesState] = useState<
		ICategory[]
	>([] as ICategory[])

	const { theme, setTheme } = useTheme()

	const { ref, isShow, setIsShow } = useOutside(false)

	const { mutate: searchProducts } = useMutation(
		['searchProducts'],
		(searchTerm: string) => ProductsServices.searchProduct(searchTerm),
		{
			onSuccess(data: IProduct[]) {
				setSearchProductsState(data)
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	const { mutate: searchCategories } = useMutation(
		['searchCategories'],
		(searchTerm: string) => CategoriesServices.searchCategories(searchTerm),
		{
			onSuccess(data: ICategory[]) {
				setSearchCategoriesState(data)
			},
			onError(data: any) {
				console.log(data.message)
			}
		}
	)

	// Записуєм дані сховища в стейт
	useEffect(() => {
		localStorage.searchHistory
			? setSearchHistoryState(JSON.parse(localStorage.searchHistory))
			: undefined
	}, [])

	// Дабавляєм в сховище дані
	function onClickHandler(e: MouseEvent) {
		setIsShow(false)

		for (let i = 0; i < searchHistoryState.length; i++) {
			if (searchHistoryState[i] == inputValueState) {
				setInputValueState('')
				return
			}
		}

		const searchHistoryArray: string[] = searchHistoryState
		searchHistoryArray.push(inputValueState)

		setSearchHistoryState(searchHistoryArray)

		localStorage.searchHistory = JSON.stringify(searchHistoryState)
		setInputValueState('')
	}

	// Очищаєм сховище
	function clearStorage(e: MouseEvent) {
		e.preventDefault()
		localStorage.searchHistory = ''
		setSearchHistoryState([])
	}

	// Видаляєм елемент сховища
	function deleteElementStorage(e: MouseEvent, element: string) {
		e.preventDefault()
		let newHistoryArray: string[] = []

		for (let i = 0; i < searchHistoryState.length; i++) {
			if (searchHistoryState[i] == element) {
				for (let index = 0; index < searchHistoryState.length; index++) {
					if (searchHistoryState[i] == searchHistoryState[index]) continue
					newHistoryArray.push(searchHistoryState[index])
				}
			}
		}
		localStorage.searchHistory = JSON.stringify(newHistoryArray)
		setSearchHistoryState(newHistoryArray)
	}

	// Окно пошуку
	function onFocusHandler() {
		setIsShow(true)
	}

	function searchCategoriesHandler() {
		return searchCategoriesState
			? searchCategoriesState.map((element, index) => {
					if (
						element.name.toUpperCase().indexOf(inputValueState.toUpperCase()) >=
						0
					)
						return (
							<li key={index} className={styles.searchResultItem}>
								<Link href={`/catalog/${element.name.split(' ').join('_')}`}>
									<a
										onClick={onClickHandler}
										className={styles.searchResultLink}
									>
										{element.name}
										<BsChevronRight />
									</a>
								</Link>
							</li>
						)
			  })
			: undefined
	}

	function productPrice(product: IProduct) {
		if (parseInt(product.discount) > 0) {
			const discountPriceValue = (
				parseInt(product.price) *
				(parseInt(product.discount) / 100)
			)
				.toString()
				.split('.')[0]
			const discountPrice = (
				parseInt(product.price) - parseInt(discountPriceValue)
			)
				.toString()
				.split('.')[0]

			return (
				<>
					<p className={styles.searchResultProductDiscount}>{product.price}</p>
					<p className={styles.searchResultProductPrice}>{discountPrice}</p>
				</>
			)
		} else {
			return (
				<>
					<p className={styles.searchResultProductPrice}>{product.price}</p>
				</>
			)
		}
	}

	useEffect(() => {
		if (inputValueState || inputValueState != ' ') {
			searchProducts(inputValueState)
			searchCategories(inputValueState)
		}
	}, [inputValueState])

	function searchProductHandler() {
		return searchProductsState
			? searchProductsState.map((element, index) => {
					if (
						element.model
							.toUpperCase()
							.indexOf(inputValueState.toUpperCase()) >= 0
					)
						return (
							<li key={index} className={styles.searchResultItemProduct}>
								<Link href={`/product/${element.model.split(' ').join('_')}`}>
									<a
										onClick={onClickHandler}
										className={styles.searchResultLinkProduct}
									>
										<div className={styles.searchResultMedia}>
											<img
												className={styles.searchResultImage}
												src={element.image[0]}
												alt='Product'
											/>
										</div>
										<div className={styles.searchResultProductData}>
											<h3 className={styles.searchResultProductName}>
												{element.model}
											</h3>
											{productPrice(element)}
										</div>
									</a>
								</Link>
							</li>
						)
			  })
			: undefined
	}

	return (
		<>
			<form action='#' className={styles.searchForm}>
				<label ref={ref} className={styles.searchLabel}>
					<input
						onFocus={onFocusHandler}
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
							<div className={styles.searchHistory}>
								<div
									style={{
										overflow: 'auto',
										maxHeight: '60vh',
										height: '100%'
									}}
								>
									<p className={styles.searchHistoryText}>Категорії</p>

									<ul className={styles.searchHistoryList}>
										{searchCategoriesHandler()}
									</ul>

									<p className={styles.searchHistoryText}>Товари</p>

									<ul className={styles.searchHistoryList}>
										{searchProductHandler()}
									</ul>
								</div>
								<button className={styles.searchHistoryLinkB}>
									Всі результати пошуку{' '}
									<BsChevronRight className={styles.arrow} />
								</button>
							</div>
						) : (
							<div className={styles.searchHistory}>
								<p className={styles.searchHistoryText}>Історія пошуку</p>

								<ul className={styles.searchHistoryList}>
									{searchHistoryState.map((element, index) => {
										return (
											<li className={styles.searchHistoryItem} key={index}>
												<Link href={`/products/${element}`}>
													<a className={styles.searchHistoryItemLink}>
														<BsSearch className={styles.searchHistoryIcon} />
														{element}
													</a>
												</Link>
												<button
													onClick={(e: MouseEvent) =>
														deleteElementStorage(e, element)
													}
													className={styles.searchHistoryDelete}
												>
													<MdOutlineClose />
												</button>
											</li>
										)
									})}
								</ul>

								<button
									onClick={clearStorage}
									className={styles.searchHistoryLinkB}
								>
									Очистити історію пошуку
								</button>
							</div>
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
