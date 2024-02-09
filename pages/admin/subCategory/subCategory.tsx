import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { CategoriesServices } from '../../../app/assets/services/categories.services'
import { ImageServices } from '../../../app/assets/services/image.services'
import { ICreateSubCategory } from '../../../app/assets/services/interface/subCategory.interface'
import { SubCategoryServices } from '../../../app/assets/services/sub-categories.services'
import ButtonGreen from '../../../app/components/ui/buttons/button-green/ButtonGreen'

interface ISubCategory {
	name: string
	categoryId: number
}
interface ICategory {
	_id: string
	name: string
	image: string
}

export const SubCategory = () => {
	const [subCategoryState, setSubCategoryState] = useState<ICreateSubCategory>(
		{} as ICreateSubCategory
	)
	const [allCategoriesState, setAllCategoriesState] = useState<ICategory[]>(
		[] as ICategory[]
	)

	const { mutate: getCategories } = useMutation(
		['getCategories'],
		() => CategoriesServices.getCategories(),
		{
			onSuccess(data: ICategory[]) {
				console.log(data)
				setAllCategoriesState(data)

				if (data.length == 1) {
					setSubCategoryState({
						...subCategoryState,
						categoryId: parseInt(data[0]._id)
					})
				}
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: createImage } = useMutation(
		['createImage'],
		(data: FormData) => ImageServices.createImage(data),
		{
			onSuccess(data) {
				setSubCategoryState({ ...subCategoryState, image: data.filePath })
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: createSubCategory } = useMutation(
		['createSubCategory'],
		(data: ICreateSubCategory) => SubCategoryServices.createSubCategory(data),
		{
			onSuccess(data) {
				console.log('success')
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	function sendImage(e: any) {
		e.preventDefault()
		const formData = new FormData()

		formData.append('file', e.target.files[0])

		createImage(formData)
	}

	function setSubCategoryHandler(e: any) {
		e.preventDefault()
		createSubCategory(subCategoryState)
		setSubCategoryState({} as ICreateSubCategory)
	}

	useEffect(() => {
		getCategories()
		console.log(allCategoriesState)
	}, [])

	return (
		<form>
			<label>
				<p>Please to enter new sub category</p>
				<input
					onChange={e =>
						setSubCategoryState({ ...subCategoryState, name: e.target.value })
					}
					className='border-2 border-solid border-black'
					type='text'
					placeholder=''
					value={subCategoryState.name}
				/>
			</label>
			<label>
				<p>Please Enter sub category image</p>
				<input
					className='border-2 border-solid border-black'
					type='file'
					name='file'
					onChange={sendImage}
				/>
			</label>
			<label>
				<p>Please on change category</p>
				<select
					onChange={e =>
						setSubCategoryState({
							...subCategoryState,
							categoryId: parseInt(e.target.value)
						})
					}
				>
					{allCategoriesState.map((element, index) => {
						return (
							<option key={index} value={element._id}>
								{element.name}
							</option>
						)
					})}
				</select>
			</label>
			<ButtonGreen onClick={(e: MouseEvent) => setSubCategoryHandler(e)}>
				Submit
			</ButtonGreen>
		</form>
	)
}
