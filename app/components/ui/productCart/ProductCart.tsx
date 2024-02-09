import { FC } from 'react'

import { IProduct } from '../../../assets/services/interface/product.interface'

import styles from './ProductCart.module.scss'

const ProductCart: FC<IProduct> = product => {
	return (
		<div>
			<p className={styles.productFlag}>{product.flag}</p>
		</div>
	)
}

export default ProductCart
