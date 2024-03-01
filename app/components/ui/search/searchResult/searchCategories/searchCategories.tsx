import Link from "next/link"
import { ICategory } from "../../../../../assets/services/interface/category.interface"
import styles from '../../searchInput.module.scss'
import { BsChevronRight } from "react-icons/bs"

export function searchCategoriesHandler(categories:ICategory[]) {
    return categories
        ? categories.map((element, index) => {
            return (
                <li key={index} className={styles.searchResultItem}>
                    <Link href={`/catalog/${element.name.split(' ').join('_')}`}>
                        <a
                            // onClick={onClickHandler}
                            className={styles.searchResultLink}
                        >
                            {element.name}
                            <BsChevronRight />
                        </a>
                    </Link>
                </li>
            )
          })
        : undefined
}