import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, SetStateAction, useEffect, useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { CategoriesServices } from '../../../../../assets/services/categories.services'
import { ICategoryChild } from '../../../../../assets/services/interface/category.interface'
import { INameChild } from '../../../../../assets/services/interface/name.interface'
import { IProduct } from '../../../../../assets/services/interface/product.interface'
import { ISubCategoryChild } from '../../../../../assets/services/interface/subCategory.interface'
import { NameServices } from '../../../../../assets/services/name.services'
import { ProductsServices } from '../../../../../assets/services/products.services'
import { SubCategoryServices } from '../../../../../assets/services/sub-categories.services'
import { useCatalog } from '../../../../../hooks/useCatalog'
import ButtonGreen from '../../../buttons/button-green/ButtonGreen'
import styles from '../Header.module.scss'

interface IHeaderCatalog {
	catalogMenuState: boolean
	setCAtalogMenuHandler: (state: boolean) => void
}

const HeaderCatalog: FC<IHeaderCatalog> = ({
	catalogMenuState,
	setCAtalogMenuHandler
}: IHeaderCatalog) => {
	const { pathname } = useRouter()
	const [products, setProducts] = useState<IProduct[]>({} as IProduct[])
	const [currentCatalogState, setCurrentCatalogState] = useState(false)
	const [catalogWrapperState, setCatalogWrapperState] = useState(false)
	const [catalogMenuHoverState, setCatalogMenuHoverState] = useState(false)
	const [catalogLinkState, setCatalogLinkState] =
		useState<SetStateAction<number | undefined>>(undefined)
	const [allCategoryState, setAllCategoryState] = useState<ICategoryChild[]>(
		[] as ICategoryChild[]
	)
	const [allNamesState, setAllNamesState] = useState<INameChild[]>(
		[] as INameChild[]
	)
	const [currentCategoryId, setCurrentCategoryId] = useState(0)

	const [allSubCategoryState, setAllSubCategoryState] = useState<
		ISubCategoryChild[]
	>([] as ISubCategoryChild[])

	const { catalogState, catalogHandler } = useCatalog()

	function openCatalog(): void {
		setCurrentCatalogState(!currentCatalogState)
		catalogHandler ? catalogHandler(!currentCatalogState) : null
	}

	function catalogWrapperHandler(state: boolean): void {
		setCatalogWrapperState(state)
	}

	function catalogMenuHandler(
		state: boolean,
		data?: IProduct[],
		index?: number
	): void {
		setCatalogMenuHoverState(state)
		if (data) {
			setCatalogLinkState(index)
		}
	}

	const { mutate: getProducts } = useMutation(
		['getProducts'],
		() => ProductsServices.getProducts(),
		{
			onSuccess(data) {
				setProducts(data)
				console.log(data)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getCategoriesChild } = useMutation(
		['getCategoriesChild'],
		() => CategoriesServices.getCategoriesChild(),
		{
			onSuccess(data: ICategoryChild[]) {
				setAllCategoryState(data)
				console.log(data)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getSubCategoriesChild } = useMutation(
		['getSubCategoriesChild'],
		() => SubCategoryServices.getSubCategoriesChild(),
		{
			onSuccess(data) {
				setAllSubCategoryState(data)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getNamesChild } = useMutation(
		['getSubCategoriesChild'],
		() => NameServices.getNamesChild(),
		{
			onSuccess(data) {
				setAllNamesState(data)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	useEffect(() => {
		if (pathname == '/home') {
			setCurrentCatalogState(true)
		}
		getCategoriesChild()
		getProducts()
		getSubCategoriesChild()
		getNamesChild()
	}, [])

	useEffect(() => {
		if (catalogMenuHoverState && catalogWrapperState) {
			setCAtalogMenuHandler(true)
		} else if (!catalogWrapperState) {
			setCAtalogMenuHandler(false)
			setCatalogLinkState(undefined)
		}
	}, [catalogWrapperState, catalogMenuHoverState])

	function setCatalogHandler() {
		const result = allCategoryState.map(element => {
			if (element._id == currentCategoryId) {
				return element.subCategory.map((subElement, index) => {
					return (
						<div key={index} className={styles.headerCatalogDataBlock}>
							<Link
								href={`/catalog/${element.name
									.split(' ')
									.join('_')}/${subElement.name.split(' ').join('_')}`}
							>
								<a className={styles.headerCatalogDataTitle}>
									{subElement.name}
								</a>
							</Link>

							<ul className={styles.headerCatalogBrands}>
								{allSubCategoryState.map(subNameEl => {
									if (subNameEl._id == subElement._id) {
										return subNameEl.nameProduct.map((nameEl, index) => {
											return (
												<li
													key={index}
													className={styles.headerCatalogBrandItem}
												>
													<Link
														href={`/catalog/${element.name
															.split(' ')
															.join('_')}/${subElement.name
															.split(' ')
															.join('_')}/${nameEl.name.split(' ').join('_')}`}
													>
														<a className={styles.headerCatalogBrandLink}>
															{nameEl.name}
														</a>
													</Link>
												</li>
											)
										})
									}
								})}
							</ul>
						</div>
					)
				})
			} else return null
		})
		return result
	}

	return (
		<div className={styles.headerCatalog}>
			<ButtonGreen
				onClick={openCatalog}
				className='pt-1.5 pb-2 w-full flex justify-center'
			>
				<CgMenuGridR className='text-white text-xl' />
				Каталог товарів
			</ButtonGreen>
			<div
				onMouseEnter={() => catalogWrapperHandler(true)}
				onMouseLeave={() => catalogWrapperHandler(false)}
				className={
					currentCatalogState
						? `${styles.headerCatalogMenu} ${styles.active}`
						: `${styles.headerCatalogMenu}`
				}
			>
				<div
					className={
						catalogMenuState
							? `${styles.headerCatalogData} ${styles.active}`
							: `${styles.headerCatalogData}`
					}
				>
					{/* <---------------------------- Products -------------------------> */}
					{setCatalogHandler()}
				</div>

				{/* <------------------------------- Список категорій ----------------------------> */}
				<ul className={styles.headerCatalogList}>
					{allCategoryState.map((el, index) => {
						return (
							<li
								key={index}
								// <------ Edit all category products ------->
								onMouseEnter={() => {
									catalogMenuHandler(true)
									setCurrentCategoryId(el._id)
								}}
								onMouseLeave={() => catalogMenuHandler(false)}
								className={
									catalogLinkState !== index
										? `${styles.headerCatalogItem}`
										: `${styles.headerCatalogItem} ${styles.active}`
								}
							>
								<div className={styles.headerCatalogLink}>
									{el.name}
									<MdKeyboardArrowRight className='ml-auto' />
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default HeaderCatalog
