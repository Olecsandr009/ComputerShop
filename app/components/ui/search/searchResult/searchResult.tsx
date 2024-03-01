import { BsChevronRight } from 'react-icons/bs'
import styles from '../searchInput.module.scss'
import { useMutation } from '@tanstack/react-query'
import { ProductsServices } from '../../../../assets/services/products.services'
import { FC, useEffect, useState } from 'react'
import { IProduct } from '../../../../assets/services/interface/product.interface'
import { searchProductHandler } from './searchProducts/searchProducts'
import { searchCategoriesHandler } from './searchCategories/searchCategories'
import { CategoriesServices } from '../../../../assets/services/categories.services'
import { ICategory } from '../../../../assets/services/interface/category.interface'
import useDebounce from '../../../../hooks/useDebounce'

interface ISearchResult {
	searchTerm: string
}

const SearchResult:FC<ISearchResult> = ({searchTerm}:ISearchResult) => {
	const [productsState, setProductsState] = useState<IProduct[]>([]);
    const [categoriesState, setCategoriesState] = useState<ICategory[]>([]);

	// Search products
	const {mutate: searchProducts} = useMutation(
		['searchProducts'],
		(searchTerm:string) => ProductsServices.searchProduct(searchTerm),
		{
			onSuccess(data) {
				setProductsState(data)
			},
			onError(e) {
				console.log(e)
			}
		}
	)

	// Search categories
	const {mutate: searchCategories} = useMutation(
		['searchCategories'],
		(searchTerm:string) => CategoriesServices.searchCategories(searchTerm),
		{
			onSuccess(data) {
				setCategoriesState(data)
			},
			onError(e) {
				console.log(e)
			}
		}
	)

	const debouncedSearchTerm = useDebounce(searchTerm, 500)
	
	useEffect(() => {
		if(searchTerm.length >= 3) {
			searchProducts(searchTerm)
			searchCategories(searchTerm)
		}
	}, [debouncedSearchTerm])

    return (
        <div className={styles.searchHistory}>
	    	<div
	    		style={{
	    			overflow: 'auto',
	    			maxHeight: '60vh',
	    			height: '100%'
	    		}}
	    	>
	    		<p className={styles.searchHistoryText}>Категорії</p>

	    	<ul className={styles.searchHistoryList}>
	    		{searchCategoriesHandler(categoriesState)}
	    	</ul>

    		<p className={styles.searchHistoryText}>Товари</p>

	    	<ul className={styles.searchHistoryList}>
	    		{searchProductHandler(productsState)}
	    	</ul>
	    </div>
	    	<button className={styles.searchHistoryLinkB}>
	    		Всі результати пошуку{' '}
	    		<BsChevronRight className={styles.arrow} />
	    	</button>
	    </div>
    )
}

export default SearchResult