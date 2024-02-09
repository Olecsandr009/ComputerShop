import { useState } from 'react'

interface IFuncPrice {
	(price: number, discount: number): {
		price: number | undefined
		discount: number | undefined
	}
}

interface IPrice {
	(type: 'value', startPrice: number, startDiscount: number): any
	(type: 'function'): any
}

export const usePrice: IPrice = (
	type,
	startPrice?: number,
	startDiscount?: number
) => {
	const [priceState, setPriceState] = useState(startPrice)
	const [discountState, setDiscountState] = useState(startDiscount)

	const getPrice: IFuncPrice = (price: number, discount: number) => {
		if (discount > 0) {
			setPriceState(price - (price / 100) * discount)
			setDiscountState(price)
		}

		return { price: priceState, discount: discountState }
	}

	if (type === 'value' && startPrice && startDiscount) {
		getPrice(startPrice, startDiscount)

		return { price: priceState, discount: discountState }
	} else if (type == 'function') {
		return { getPrice }
	}
}
