import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BrandServices } from '../../../app/assets/services/brand.services'
import { IBrand } from '../../../app/assets/services/interface/brand.interface'
import { Container } from '../../../app/components/ui/container/Container'
import SlideNavigation from '../../../app/components/ui/slide-navigation/SlideNavigation'

export default function Brands() {
	const [swiperState, setSwiperState] = useState(false)
	const [brandsState, setBrandsState] = useState<IBrand[]>([] as IBrand[])

	const { mutate: getBrands } = useMutation(
		['getBrands'],
		() => BrandServices.getBrands(),
		{
			onSuccess(data: IBrand[]) {
				setBrandsState(data)
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => {
		getBrands()
		setSwiperState(true)
	}, [])

	return (
		<section className=' mb-20'>
			<Container>
				{swiperState ? (
					<Swiper slidesPerView={7} spaceBetween={60} className='h-[150px] p-8'>
						{brandsState
							? brandsState.map((el, index) => (
									<SwiperSlide
										key={index}
										className=' w-40 h-40 flex items-center justify-center'
									>
										<Link href={'/home'}>
											<a>
												<img src={el.image} />
											</a>
										</Link>
									</SwiperSlide>
							  ))
							: undefined}
						<div className='flex items-center justify-between absolute w-full top-1/2 -translate-y-1/2 z-10 pointer-events-none'>
							<SlideNavigation option='prev' className='pointer-events-auto'>
								<SlArrowLeft />
							</SlideNavigation>
							<SlideNavigation option='next' className='pointer-events-auto'>
								<SlArrowRight />
							</SlideNavigation>
						</div>
					</Swiper>
				) : undefined}
			</Container>
		</section>
	)
}
