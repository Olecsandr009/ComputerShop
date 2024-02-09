import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ISubCategory } from '../../../app/assets/services/interface/subCategory.interface'
import { NameServices } from '../../../app/assets/services/name.services'
import { SubCategoryServices } from '../../../app/assets/services/sub-categories.services'
import ButtonGreen from '../../../app/components/ui/buttons/button-green/ButtonGreen'

interface IName {
	name: string
	subCategoryId: number
}

const Name = () => {
	const [nameState, setNameState] = useState<IName>({} as IName)
	const [allSubCategoryState, setAllSubCategoryState] = useState<
		ISubCategory[]
	>([] as ISubCategory[])

	const { mutate: createName } = useMutation(
		['createName'],
		(data: IName) => NameServices.createName(data),
		{
			onSuccess(data) {
				console.log('Success')
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getSubCategories } = useMutation(
		['getCategories'],
		() => SubCategoryServices.getSubCategories(),
		{
			onSuccess(data: ISubCategory[]) {
				setAllSubCategoryState(data)

				if (data.length == 1) {
					setNameState({ ...nameState, subCategoryId: data[0]._id })
				}
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	useEffect(() => getSubCategories(), [])

	function setNameHandler(e: any) {
		e.preventDefault()

		createName(nameState)
		setNameState({} as IName)
	}

	return (
		<form>
			<label>
				<p>Please Enter New Product Name</p>
				<input
					onChange={e => setNameState({ ...nameState, name: e.target.value })}
					className='border-2 border-solid border-black'
					type='text'
					placeholder=''
					value={nameState.name}
				/>
			</label>
			<label>
				<p>Please on change sub Category</p>
				<select
					onChange={e =>
						setNameState({
							...nameState,
							subCategoryId: parseInt(e.target.value)
						})
					}
				>
					{allSubCategoryState.map((element, index) => {
						return (
							<option key={index} value={element._id}>
								{element.name}
							</option>
						)
					})}
				</select>
			</label>
			<ButtonGreen onClick={(e: MouseEvent) => setNameHandler(e)}>
				Submit
			</ButtonGreen>
		</form>
	)
}

export default Name
