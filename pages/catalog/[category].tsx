import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiOutlineArrowDown } from 'react-icons/hi'

import { CategoriesServices } from '../../app/assets/services/categories.services'
import { ICategoryChild } from '../../app/assets/services/interface/category.interface'
import {
	ISubCategory,
	ISubCategoryChild
} from '../../app/assets/services/interface/subCategory.interface'
import { SubCategoryServices } from '../../app/assets/services/sub-categories.services'
import Header from '../../app/components/ui/Layout/header/Header'
import BreadCrumbs from '../../app/components/ui/bread-crumbs/bread-crumbs'
import { Container } from '../../app/components/ui/container/Container'

import styles from './categories.module.scss'

const Category = () => {
	const router = useRouter()
	const [categoryChildState, setCategoryChildState] = useState<
		ICategoryChild[]
	>({} as ICategoryChild[])
	const [subCategoryChildState, setSubCategoryChildState] = useState<
		ISubCategoryChild[]
	>([] as ISubCategoryChild[])

	const { mutate: getCategoryChild } = useMutation(
		['getCategoryChild'],
		(name: string) => CategoriesServices.getCategoriesChildByName(name),
		{
			onSuccess(data: ICategoryChild[]) {
				setCategoryChildState(data)
			},
			onError(data: any) {
				console.error('Error', data.message)
			}
		}
	)

	const { mutate: getSubCategoriesChild } = useMutation(
		['getSubCategoriesChild'],
		(name: string) => SubCategoryServices.getCategoriesChildByName(name),
		{
			onSuccess(data: ISubCategoryChild[]) {
				if (subCategoryChildState.length) {
					let state = false
					subCategoryChildState.map(element => {
						if (element.name == data[0].name) state = true
					})
					if (!state) {
						let newArray = subCategoryChildState
						for (let i = 0; i < data.length; i++) {
							newArray.push(data[i])
						}
						setSubCategoryChildState(newArray)
					}
				} else {
					let newArray = subCategoryChildState
					for (let i = 0; i < data.length; i++) {
						newArray.push(data[i])
					}
					setSubCategoryChildState(newArray)
				}
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => {
		categoryChildState[0]
			? categoryChildState[0].subCategory.forEach(element => {
					getSubCategoriesChild(element.name)
			  })
			: undefined
	}, [categoryChildState])

	useEffect(() => {
		const currentURL = Array.isArray(router.query.category)
			? router.query.category[0]
			: router.query.category || ''

		getCategoryChild(currentURL.split('_').join(' '))
	}, [router.query.category])

	function subCategoryFunc(subCategories: ISubCategory[]) {
		if (subCategories) {
			return subCategories.map((element, index) => {
				return (
					<div key={index} className={styles.categoryBlock}>
						<div className={styles.categoryBlockMedia}>
							<img
								className={styles.categoryBlockImage}
								src={element.image}
								alt='category'
							/>
							<p className={styles.categoryBlockSubCategory}>{element.name}</p>
						</div>
						<ul className={styles.categoryBlockNames}>
							{subCategoryChildFunc(subCategoryChildState, element.name)}
						</ul>

						<button className={styles.categoryBlockButton}>
							<HiOutlineArrowDown />
							Ще категорії
						</button>
					</div>
				)
			})
		}
	}

	function subCategoryChildFunc(
		subCategoryChild: ISubCategoryChild[],
		subCategoryName: string
	) {
		if (subCategoryChild) {
			return subCategoryChild.map(name => {
				if (subCategoryName == name.name) {
					return name.nameProduct.map((nameElem, nameIndex) => {
						return (
							<li key={nameIndex} className={styles.categoryBlockName}>
								<Link
									className={styles.categoryBlockLink}
									href={`/catalog/${router.query.category
										?.toString()
										.split(' ')
										.join('_')}/${nameElem.name.split(' ').join('_')}`}
								>
									<a>{nameElem.name}</a>
								</Link>
							</li>
						)
					})
				}
			})
		}
	}

	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['category']} />
			<Container>
				<h2 className={styles.categoryTitle}>{router.query.category}</h2>

				<div className={styles.categoryBlocks}>
					{categoryChildState[0]
						? subCategoryFunc(categoryChildState[0].subCategory)
						: undefined}
				</div>
			</Container>
		</>
	)
}

export default Category
