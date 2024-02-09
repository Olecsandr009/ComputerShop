import { useState } from 'react'
import { useSwiper, useSwiperSlide } from 'swiper/react'

interface INav {
	prev: boolean
	next: boolean
}

export default function SlideNavigation({ option, children, className }: any) {
	const swiper = useSwiper()
	const swiperSlide = useSwiperSlide()
	const [swiperNavState, setSwiperNavState] = useState<INav>({
		prev: false,
		next: true
	} as INav)

	function slideNavFunc() {
		option === 'next' ? swiper.slideNext() : swiper.slidePrev()
		if (swiper.isEnd) setSwiperNavState({ ...swiperNavState, next: false })
		else setSwiperNavState({ ...swiperNavState, next: true })
		if (swiper.isBeginning)
			setSwiperNavState({ ...swiperNavState, prev: false })
		else setSwiperNavState({ ...swiperNavState, prev: true })
	}

	return (
		<button
			className={className}
			//disabled={option == 'next' ? !swiperNavState.next : !swiperNavState.prev}
			onClick={slideNavFunc}
		>
			{children}
		</button>
	)
}
