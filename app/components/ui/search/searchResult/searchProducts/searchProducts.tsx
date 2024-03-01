import Image from 'next/image'
import { IProduct } from '../../../../../assets/services/interface/product.interface'
import styles from '../../searchInput.module.scss'
import Link from 'next/link'

export function searchProductHandler(products:IProduct[]) {

    function productPrice(product: IProduct) {
		if (parseInt(product.discount) > 0) {
			const discountPriceValue = (
				parseInt(product.price) *
				(parseInt(product.discount) / 100)
			)
				.toString()
				.split('.')[0]
			const discountPrice = (
				parseInt(product.price) - parseInt(discountPriceValue)
			)
				.toString()
				.split('.')[0]

			return (
				<>
					<p className={styles.searchResultProductDiscount}>{product.price}</p>
					<p className={styles.searchResultProductPrice}>{discountPrice}</p>
				</>
			)
		} else {
			return (
				<>
					<p className={styles.searchResultProductPrice}>{product.price}</p>
				</>
			)
		}
	}

    return products
        ? products.map((element, index) => {
                    return (
                        <li key={index} className={styles.searchResultItemProduct}>
                            <Link href={`/product/${element.model.split(' ').join('_')}`}>
                                <a
                                    className={styles.searchResultLinkProduct}
                                >
                                    <div className={styles.searchResultMedia}>
                                        <Image
                                            className={styles.searchResultImage}
                                            src={element.image[0]}
                                            alt='Product'
                                        />
                                    </div>
                                    <div className={styles.searchResultProductData}>
                                        <h3 className={styles.searchResultProductName}>
                                            {element.model}
                                        </h3>
                                        {productPrice(element)}
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
          })
        : undefined
}