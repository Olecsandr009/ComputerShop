import { RefObject, useEffect, useState } from 'react'

import { slideDown } from './functions/slideDown'
import { slideUp } from './functions/slideUp'

export const useSpoler = (
	refObj: RefObject<HTMLDivElement> | null,
	refLink: RefObject<HTMLDivElement> | null
) => {
	let slideToggle = (target: any, duration = 500) => {
		if (target && target.current.hidden) {
			return slideDown(target, duration)
		} else {
			return slideUp(target, duration)
		}
	}

	const [state, setState] = useState(false)
	const [refObjectState, setRefObjectState] = useState(
		{} as RefObject<HTMLDivElement> | null
	)
	const [refLinkState, setRefLinkState] = useState(
		{} as RefObject<HTMLDivElement> | null
	)

	refLinkState?.current?.addEventListener('click', e => {
		refLinkState.current?.classList.contains('active')
			? setState(true)
			: setState(false)
	})

	useEffect(() => {
		if (refObj?.current) slideToggle(refObj)
		console.log('click')
	}, [state])

	useEffect(() => {
		setRefObjectState(refObj)
	}, [refObj])

	useEffect(() => {
		setRefLinkState(refLink)
	}, [refLink])
}
