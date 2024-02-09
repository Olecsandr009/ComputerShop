export const slideDown = (target: any, duration = 500) => {
	if (!target) return

	target.current.classList.add('active')
	target.current.classList.add('_slide')
	if (target.current.hidden) {
		target.current.hidden = false
		target.current.style.display = 'block'
	}
	let height = target.current.offsetHeight
	target.current.style.overflow = 'hidden'
	target.current.style.height = '0'
	target.current.style.paddingTop = '0'
	target.current.style.paddingBottom = '0'
	target.current.style.marginTop = '0'
	target.current.style.marginBottom = '0'
	target.current.offsetHeight
	target.current.style.transitionProperty = 'height, margin, padding'
	target.current.style.transitionDuration = duration + 'ms'
	target.current.style.height = height + 'px'
	target.current.style.removeProperty('padding-top')
	target.current.style.removeProperty('padding-bottom')
	target.current.style.removeProperty('margin-top')
	target.current.style.removeProperty('margin-bottom')
	window.setTimeout(() => {
		target.current.style.removeProperty('height')
		target.current.style.removeProperty('overflow')
		target.current.style.removeProperty('transition-duration')
		target.current.style.removeProperty('transition-property')
		target.current.classList.remove('_slide')
	}, duration)
}
