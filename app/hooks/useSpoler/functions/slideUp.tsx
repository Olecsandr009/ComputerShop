import { MutableRefObject } from 'react'

export const slideUp = (
	target: MutableRefObject<HTMLDivElement>,
	duration = 500
) => {
	target.current.classList.remove('active')
	target.current.classList.add('_slide')
	target.current.style.transitionProperty = 'height, margin, padding'
	target.current.style.transitionDuration = duration + 'ms'
	target.current.style.height = target.current.offsetHeight + 'px'
	target.current.offsetHeight
	target.current.style.overflow = 'hidden'
	target.current.style.height = '0'
	target.current.style.paddingTop = '0'
	target.current.style.paddingBottom = '0'
	target.current.style.marginTop = '0'
	target.current.style.marginBottom = '0'
	window.setTimeout(() => {
		target.current.hidden = true
		target.current.style.display = 'none'
		target.current.style.removeProperty('height')
		target.current.style.removeProperty('padding-top')
		target.current.style.removeProperty('padding-bottom')
		target.current.style.removeProperty('margin-top')
		target.current.style.removeProperty('margin-bottom')
		target.current.style.removeProperty('overflow')
		target.current.style.removeProperty('transition-duration')
		target.current.style.removeProperty('transition-property')
		target.current.classList.remove('_slide')
	}, duration)
}
