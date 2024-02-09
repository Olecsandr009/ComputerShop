import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { CategoriesServices } from '../../../app/assets/services/categories.services'
import { ICreateCategory } from '../../../app/assets/services/interface/category.interface'
import ButtonGreen from '../../../app/components/ui/buttons/button-green/ButtonGreen'

export const Category = () => {
	const [categoryState, setCategoryState] = useState<ICreateCategory>(
		{} as ICreateCategory
	)

	const { mutate: createCategory } = useMutation(
		['createCategory'],
		(data: ICreateCategory) => CategoriesServices.createCategory(data),
		{
			onSuccess(data) {
				console.log('Success')
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	function setCategoryHandler(e: any) {
		e.preventDefault()
		createCategory(categoryState)
		setCategoryState({} as ICreateCategory)
	}

	return (
		<form>
			<label>
				<p>Please Enter New Category</p>
				<input
					onChange={e =>
						setCategoryState({ ...categoryState, name: e.target.value })
					}
					className='border-2 border-solid border-black'
					type='text'
					placeholder=''
					value={categoryState.name}
				/>
			</label>
			<ButtonGreen onClick={(e: MouseEvent) => setCategoryHandler(e)}>
				Submit
			</ButtonGreen>
		</form>
	)
}
