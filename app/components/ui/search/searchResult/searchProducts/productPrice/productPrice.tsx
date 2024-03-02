import { IProduct } from "../../../../../../assets/services/interface/product.interface"
import styles from '../../../searchInput.module.scss'

export function productPrice(product: IProduct) {
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