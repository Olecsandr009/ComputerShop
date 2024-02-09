import { useEffect, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '../../../app/ui/container/Container'
import SlideNavigation from '../../../app/ui/slide-navigation/SlideNavigation'

export default function Feedback() {
	const [swiperState, setSwiperState] = useState(false)

	useEffect(() => {
		setSwiperState(true)
	})

	return (
		<section className='mb-20'>
			<Container>
				<h3 className='font-semibold text-3xl text-center mb-10'>
					Популярные отзывы
				</h3>

				{swiperState ? (
					<Swiper slidesPerView={2} slidesPerGroup={30}>
						<SwiperSlide className='p-2'>
							<a
								className='flex gap-8 p-8 shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
								href='#'
							>
								<div className=' basis-2/5 grow-0 shrink-0'>
									<div className='mb-5'>
										<img src='/img/feedback/image.jpg' />
									</div>
									<p className='font-semibold text-xs text-gray-700 mb-5'>
										Портативный вапорайзер «DaVinci MIQRO Vaporizer ...
									</p>
									<div className='flex items-center gap-8 w-full justify-between'>
										<p>10190 грн</p>
										<div>
											<div></div>
											<p className=' text-xs text-gray-700'>(3)</p>
										</div>
									</div>
								</div>
								<div>
									<div className='flex items-center gap-4 mb-4'>
										<div>
											<img src='/img/ava.png' />
										</div>
										<div>
											<p className='font-semibold mb-1'>Константин </p>
											<p className='flex items-center gap-1 text-xs text-green-600'>
												<BsBagCheck />
												Уже купил
											</p>
										</div>
									</div>
									<p className=' text-sm mb-4'>
										Ну что ж , напишу свой отзыв после месяца использования :)
										Разбирался с нужной температурой, количеством стаффаи
										затяжек, примерно две недели По итогу: эффект, в отличии от
										дыма, чище в разы и длится дольше, самого дыма не будет,
										будет немного пара, вкуса тоже нет. Аппарат бомба,
										рекомендую!Прежде чем...
									</p>
									<div className=' text-sm text-gray-800 underline hover:text-green-700'>
										Подробнее
									</div>
								</div>
							</a>
						</SwiperSlide>
						<SwiperSlide className='p-2'>
							<a
								className='flex gap-8 p-8 shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
								href='#'
							>
								<div className=' basis-2/5 grow-0 shrink-0'>
									<div className='mb-5'>
										<img src='/img/feedback/image2.jpg' />
									</div>
									<p className='font-semibold text-xs text-gray-700 mb-5'>
										Портативный вапорайзер «DaVinci MIQRO Vaporizer ...
									</p>
									<div className='flex items-center gap-8 justify-between'>
										<p>10190 грн</p>
										<div>
											<div></div>
											<p className=' text-xs text-gray-700'>(3)</p>
										</div>
									</div>
								</div>
								<div>
									<div className='flex items-center gap-4 mb-4'>
										<div>
											<img src='/img/ava.png' />
										</div>
										<div>
											<p className='font-semibold mb-1'>Константин </p>
										</div>
									</div>
									<p className=' text-sm mb-4'>
										Ну что ж , напишу свой отзыв после месяца использования :)
										Разбирался с нужной температурой, количеством стаффаи
										затяжек, примерно две недели По итогу: эффект, в отличии от
										дыма, чище в разы и длится дольше, самого дыма не будет,
										будет немного пара, вкуса тоже нет. Аппарат бомба,
										рекомендую!Прежде чем...
									</p>
									<div className=' text-sm text-gray-800 underline hover:text-green-700'>
										Подробнее
									</div>
								</div>
							</a>
						</SwiperSlide>
						<SwiperSlide className='p-2'>
							<a
								className='flex gap-8 p-8 shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
								href='#'
							>
								<div className=' basis-2/5 grow-0 shrink-0'>
									<div className='mb-5'>
										<img src='/img/feedback/image.jpg' />
									</div>
									<p className='font-semibold text-xs text-gray-700 mb-5'>
										Портативный вапорайзер «DaVinci MIQRO Vaporizer ...
									</p>
									<div className='flex items-center gap-8 w-full justify-between'>
										<p>10190 грн</p>
										<div>
											<div></div>
											<p className=' text-xs text-gray-700'>(3)</p>
										</div>
									</div>
								</div>
								<div>
									<div className='flex items-center gap-4 mb-4'>
										<div>
											<img src='/img/ava.png' />
										</div>
										<div>
											<p className='font-semibold mb-1'>Константин </p>
											<p className='flex items-center gap-1 text-xs text-green-600'>
												<BsBagCheck />
												Уже купил
											</p>
										</div>
									</div>
									<p className=' text-sm mb-4'>
										Ну что ж , напишу свой отзыв после месяца использования :)
										Разбирался с нужной температурой, количеством стаффаи
										затяжек, примерно две недели По итогу: эффект, в отличии от
										дыма, чище в разы и длится дольше, самого дыма не будет,
										будет немного пара, вкуса тоже нет. Аппарат бомба,
										рекомендую!Прежде чем...
									</p>
									<div className=' text-sm text-gray-800 underline hover:text-green-700'>
										Подробнее
									</div>
								</div>
							</a>
						</SwiperSlide>
						<SwiperSlide className='p-2'>
							<a
								className='flex gap-8 p-8 shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
								href='#'
							>
								<div className=' basis-2/5 grow-0 shrink-0'>
									<div className='mb-5'>
										<img src='/img/feedback/image.jpg' />
									</div>
									<p className='font-semibold text-xs text-gray-700 mb-5'>
										Портативный вапорайзер «DaVinci MIQRO Vaporizer ...
									</p>
									<div className='flex items-center gap-8 w-full justify-between'>
										<p>10190 грн</p>
										<div>
											<div></div>
											<p className=' text-xs text-gray-700'>(3)</p>
										</div>
									</div>
								</div>
								<div>
									<div className='flex items-center gap-4 mb-4'>
										<div>
											<img src='/img/ava.png' />
										</div>
										<div>
											<p className='font-semibold mb-1'>Константин </p>
											<p className='flex items-center gap-1 text-xs text-green-600'>
												<BsBagCheck />
												Уже купил
											</p>
										</div>
									</div>
									<p className=' text-sm mb-4'>
										Ну что ж , напишу свой отзыв после месяца использования :)
										Разбирался с нужной температурой, количеством стаффаи
										затяжек, примерно две недели По итогу: эффект, в отличии от
										дыма, чище в разы и длится дольше, самого дыма не будет,
										будет немного пара, вкуса тоже нет. Аппарат бомба,
										рекомендую!Прежде чем...
									</p>
									<div className=' text-sm text-gray-800 underline hover:text-green-700'>
										Подробнее
									</div>
								</div>
							</a>
						</SwiperSlide>

						<div className='flex items-center justify-between absolute w-full top-1/2 -translate-y-1/2 z-10 pointer-events-none'>
							<SlideNavigation
								option='prev'
								className='pointer-events-auto translate-x-3'
							>
								<SlArrowLeft />
							</SlideNavigation>
							<SlideNavigation
								option='next'
								className='pointer-events-auto -translate-x-3'
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
