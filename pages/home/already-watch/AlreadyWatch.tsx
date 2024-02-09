import { useEffect, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '../../../app/ui/container/Container'
import SlideNavigation from '../../../app/ui/slide-navigation/SlideNavigation'

export default function AlreadyWatch() {
	const [swiperState, setSwiperState] = useState(false)
	const products = [
		{
			name: 'Вапорайзер портативный «Boundless Cool»',
			price: '22500',
			rating: 10,
			image: '/img/AlreadyWatch/image.jpg',
			state: 'Нет в наличии',
			discount: ''
		},
		{
			name: 'Вапорайзер домашний «Volcano Hybrid Easy Valve Vaporizer»',
			price: '22500',
			rating: 10,
			image: '/img/AlreadyWatch/image2.jpg',
			state: 'Новинка',
			discount: ''
		},
		{
			name: 'Бонг стеклянный «Black glitter»',
			price: '1330',
			rating: 0,
			image: '/img/AlreadyWatch/image3.jpg',
			state: 'Уценка',
			discount: '1830'
		},
		{
			name: 'Пепельница металлическая «Аргентум»',
			price: '185',
			rating: 40,
			image: '/img/AlreadyWatch/image4.jpg',
			state: 'Архивный',
			discount: ''
		},
		{
			name: 'Вапорайзер портативный «Boundless Cool»',
			price: '22500',
			rating: 10,
			image: '/img/AlreadyWatch/image.jpg',
			state: 'Нет в наличии',
			discount: ''
		},
		{
			name: 'Вапорайзер домашний «Volcano Hybrid Easy Valve Vaporizer»',
			price: '22500',
			rating: 10,
			image: '/img/AlreadyWatch/image2.jpg',
			state: 'Новинка',
			discount: ''
		},
		{
			name: 'Бонг стеклянный «Black glitter»',
			price: '1330',
			rating: 0,
			image: '/img/AlreadyWatch/image3.jpg',
			state: 'Уценка',
			discount: '1830'
		},
		{
			name: 'Пепельница металлическая «Аргентум»',
			price: '185',
			rating: 40,
			image: '/img/AlreadyWatch/image4.jpg',
			state: 'Архивный',
			discount: ''
		}
	]

	useEffect(() => {
		setSwiperState(true)
	}, [])

	return (
		<section className=' mb-20'>
			<h2 className=' text-center font-semibold text-2xl mb-10'>
				Вы уже смотрели
			</h2>
			<Container>
				{swiperState ? (
					<Swiper
						slidesPerView={4}
						slidesPerGroup={60}
						className=' items-stretch'
					>
						{products.map((el, index) => (
							<SwiperSlide className=' h-96 p-2' key={index}>
								<a
									href='#'
									className=' py-5 px-3 block relative h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
								>
									<p className='absolute top-5 left-0 font-semibold text-xs py-1 px-5 text-white bg-green-600	'>
										{el.state}
									</p>
									<div className='flex justify-center mb-5'>
										<img src={el.image} />
									</div>
									<p className='font-semibold mb-6 max-h-12 overflow-hidden h-fulls'>
										{el.name}
									</p>
									<p className='text-gray-600 line-through'>{el.discount}</p>
									<div className='flex items-center justify-between'>
										<p className='font-semibold text-xl'>{el.price}</p>
										<div>
											<div></div>
											<p className=' text-sm text-gray-700'>{el.rating}</p>
										</div>
									</div>
								</a>
							</SwiperSlide>
						))}
						<div className='absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between pointer-events-none z-10'>
							<SlideNavigation
								className='pointer-events-auto p-2'
								option='prev'
							>
								<SlArrowLeft />
							</SlideNavigation>
							<SlideNavigation
								className='pointer-events-auto p-2'
								option='next'
							>
								<SlArrowRight />
							</SlideNavigation>
						</div>
					</Swiper>
				) : undefined}
			</Container>
		</section>
	)
}
