import Image from 'next/image'
import { IProduct } from '../../../../../assets/services/interface/product.interface'
import styles from '../../searchInput.module.scss'
import Link from 'next/link'
import { productPrice } from './productPrice/productPrice'

export function searchProductHandler(products:IProduct[]) {
    return products
        ? products.map((element, index) => {
            return (
                <li key={index} className={styles.searchResultItemProduct}>
                    <Link href={`/product/${element.slug}`}>
                        <a
                            className={styles.searchResultLinkProduct}
                        >
                            <div className={styles.searchResultMedia}>
                                <img
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
        }) : undefined
}