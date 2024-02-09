import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { BrandServices } from '../../../app/assets/services/brand.services'
import { ImageServices } from '../../../app/assets/services/image.services'
import { ICreateBrand } from '../../../app/assets/services/interface/brand.interface'
import ButtonGreen from '../../../app/components/ui/buttons/button-green/ButtonGreen'

export const Brand = () => {
	const [brandState, setBrandState] = useState<ICreateBrand>({} as ICreateBrand)

	const { mutate: createImage } = useMutation(
		['createImage'],
		(data: FormData) => ImageServices.createImage(data),
		{
			onSuccess(data) {
				setBrandState({ ...brandState, image: data.filePath })
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: createBrand } = useMutation(
		['createBrand'],
		(data: ICreateBrand) => BrandServices.createBrand(data),
		{
			onSuccess(data) {
				console.log('Success')
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

	function setBrandHandler(e: any) {
		e.preventDefault()

		createBrand(brandState)
		setBrandState({} as ICreateBrand)
	}

	return (
		<form>
			<label>
				<p>Please Enter New Brand</p>
				<input
					onChange={e => setBrandState({ ...brandState, name: e.target.value })}
					className='border-2 border-solid border-black'
					type='text'
					placeholder=''
					value={brandState.name}
				/>
			</label>
			<label>
				<p>Please Enter New Image brand</p>
				<input
					onChange={sendImage}
					className='border-2 border-solid border-black'
					type='file'
				/>
			</label>
			<ButtonGreen onClick={(e: MouseEvent) => setBrandHandler(e)}>
				Submit
			</ButtonGreen>
		</form>
	)
}
