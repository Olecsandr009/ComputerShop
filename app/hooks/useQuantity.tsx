import { useState } from 'react'

export const useQuantity = (startValue: number) => {
	const [quantity, setQuantity] = useState(startValue)

	function increase() {
		setQuantity(quantity + 1)
	}

	function reduce() {
		setQuantity(quantity - 1)
	}

	return { quantity, increase, reduce }
}
