import { ChangeEventHandler, FC, useEffect, useState } from 'react'

import ButtonGreen from '../../app/ui/button-green/ButtonGreen'
import Input from '../../app/ui/input/Input'

import styles from './index.module.scss'

interface ICreateProduct {
	name: string
	image: string
	color: string[]
	state?: string
	price: number
	descount?: number
	description: string
	category: string
	features?: string[]
}

const CreateProduct: FC<{}> = ({}) => {
	const [createProductDataState, setCreateProductDataState] =
		useState<ICreateProduct>({} as ICreateProduct)

	useEffect(() => {
		const formData = new FormData()
		formData.append('file', createProductDataState.image)
		console.log(formData)
	}, [createProductDataState.image])

	return (
		<div className={styles.createProduct}>
			<form action='#' className={styles.createProductForm}>
				<Input
					onChange={data =>
						setCreateProductDataState({ ...createProductDataState, name: data })
					}
					value={createProductDataState.name}
					placeholder='Введіть назву товару'
					onError={false}
				/>

				<input
					type='file'
					placeholder='Виберіть файл'
					onChange={(e: any) =>
						setCreateProductDataState({
							...createProductDataState,
							image: e.target.files[0]
						})
					}
				/>

				<img
					src={
						createProductDataState.image
							? createProductDataState.image
							: undefined
					}
					alt='Please check image'
				/>

				<Input
					onChange={data =>
						setCreateProductDataState({
							...createProductDataState,
							price: data
						})
					}
					value={createProductDataState.price}
					placeholder='Введіть ціну товару'
					onError={false}
				/>
				<Input
					onChange={data =>
						setCreateProductDataState({
							...createProductDataState,
							description: data
						})
					}
					value={createProductDataState.description}
					placeholder='Опишіть товар'
					onError={false}
				/>
				<Input
					onChange={data =>
						setCreateProductDataState({
							...createProductDataState,
							category: data
						})
					}
					value={createProductDataState.category}
					placeholder='Введіть категорію'
					onError={false}
				/>

				<ButtonGreen>Створити</ButtonGreen>
			</form>
		</div>
	)
}

export default CreateProduct
