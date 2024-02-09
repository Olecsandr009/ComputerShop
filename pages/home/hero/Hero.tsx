import { useEffect, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '../../../app/components/ui/container/Container'
import SlideNavigation from '../../../app/components/ui/slide-navigation/SlideNavigation'
import { useCatalog } from '../../../app/hooks/useCatalog'

import styles from './hero.module.scss'

export default function Hero() {
	const [swiperState, setSwiperState] = useState(false)
	const { catalogState, catalogHandler } = useCatalog()
	useEffect(() => {
		setSwiperState(true)
	}, [])
	return (
		<section className=' mb-20'>
			<Container className='flex justify-end gap-8 relative'>
				<div className=' w-[300px]' style={{ flex: '0 0 20%' }} />
				<div
					className={`${
						catalogState ? 'w-[calc(100%-332px)] transition-all' : ''
					} relative transition-all w-full`}
					style={catalogState ? { flex: '0 1 calc(100%-332px)' } : {}}
				>
					{swiperState ? (
						<Swiper
							style={{ width: '100%' }}
							slidesPerView={1}
							className={styles.heroSwiper}
						>
							<SwiperSlide className={styles.heroSlide}>
								<img src='/img/Баннер1.jpeg' />
							</SwiperSlide>
							<SwiperSlide className={styles.heroSlide}>
								<img src='/img/Баннер.jpg' />
							</SwiperSlide>
							<SwiperSlide className={styles.heroSlide}>
								<img src='/img/Баннер.jpg' />
							</SwiperSlide>
							<div className='absolute flex justify-between items-center gap-8 top-1/2 z-10 w-full opacity-80 -translate-y-1/2 pointer-events-none'>
								<SlideNavigation
									className=' w-12 h-12 bg-gray-500 flex items-center pointer-events-auto justify-center text-3xl pr-1'
									option='prev'
								>
									<SlArrowLeft />
								</SlideNavigation>
								<SlideNavigation
									className=' w-12 h-12 bg-gray-500 flex items-center justify-center pointer-events-auto text-3xl'
									option='next'
								>
									<SlArrowRight />
								</SlideNavigation>
							</div>
						</Swiper>
					) : undefined}
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<div>
								<img src='/img/heroIcon/icon.svg' />
							</div>
							<div>
								<h3 className='font-semibold mb-1'>Ми 8 років в темі</h3>
								<p className=' text-xs text-gray-700'>
									І з нами згодні 45780 постійних клієнтів
								</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div>
								<img src='/img/heroIcon/icon2.svg' />
							</div>
							<div>
								<h3 className='font-semibold mb-1'>95% щасливих клієнтів</h3>
								<p className=' text-xs text-gray-700'>
									І це підтверджує 3500 відгуків про нашу роботу
								</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div>
								<img src='/img/heroIcon/icon3.svg' />
							</div>
							<div>
								<h3 className='font-semibold mb-1'>
									Відправлення в день замовлення
								</h3>
								<p className=' text-xs text-gray-700'>
									Будь-якого товару із найбільшого асортименту в світі
								</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<div>
								<img src='/img/heroIcon/icon4.svg' />
							</div>
							<div>
								<h3 className='font-semibold mb-1'>Персональний подарунок</h3>
								<p className=' text-xs text-gray-700'>
									Для кожного клієнта, а також бонуси і знижки
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
