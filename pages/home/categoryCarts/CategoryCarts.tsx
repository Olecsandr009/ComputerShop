import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ISubCategory } from '../../../app/assets/services/interface/subCategory.interface'
import { SubCategoryServices } from '../../../app/assets/services/sub-categories.services'
import { Container } from '../../../app/components/ui/container/Container'

export default function CategoryCarts() {
	const [allCategoriesState, setAllCategoriesState] = useState<ISubCategory[]>(
		[] as ISubCategory[]
	)

	const { mutate: getCategoriesCount } = useMutation(
		['getSubCategories'],
		() => SubCategoryServices.getSubCategoriesByCount(8),
		{
			onSuccess(data: ISubCategory[]) {
				setAllCategoriesState(data)
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => {
		getCategoriesCount()
	}, [])

	return (
		<section className=' mb-20'>
			<Container className='grid grid-cols-4 gap-8'>
				{allCategoriesState.map((el, index) => {
					if (index > 8) return

					return (
						<a
							key={index}
							href='#'
							className='border-b border-black bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
						>
							<div className='h-[336px] overflow-hidden flex justify-center '>
								<img src={el.image} className=' max-w-none max-h-full h-full' />
							</div>
							<p className='font-semibold text-center uppercase'>{el.name}</p>
						</a>
					)
				})}
			</Container>
		</section>
	)
}
