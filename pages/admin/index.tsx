import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { BrandServices } from '../../app/assets/services/brand.services'
import { CategoriesServices } from '../../app/assets/services/categories.services'
import { ImageServices } from '../../app/assets/services/image.services'
import { IBrand } from '../../app/assets/services/interface/brand.interface'
import {
	ICategory,
	ICategoryChild
} from '../../app/assets/services/interface/category.interface'
import { IName } from '../../app/assets/services/interface/name.interface'
import { ICreateProduct } from '../../app/assets/services/interface/product.interface'
import { ISubCategory } from '../../app/assets/services/interface/subCategory.interface'
import { NameServices } from '../../app/assets/services/name.services'
import { ProductsServices } from '../../app/assets/services/products.services'
import { SubCategoryServices } from '../../app/assets/services/sub-categories.services'
import ButtonGreen from '../../app/components/ui/buttons/button-green/ButtonGreen'

import styles from './admin.module.scss'
import { Brand } from './brand/brand'
import { Category } from './category/category'
import Name from './name/name'
import { SubCategory } from './subCategory/subCategory'

const Admin = () => {
	const [product, setProduct] = useState<ICreateProduct>({} as ICreateProduct)

	const [productColor, setProductColor] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)
	const [formDataSetState, setFormDataState] = useState({})

	const [allCategoriesState, setAllCategoriesState] = useState<
		ICategoryChild[]
	>([] as ICategoryChild[])
	const [allSubCategoriesState, setAllSubCategoriesState] = useState<
		ISubCategory[]
	>([] as ISubCategory[])

	const [allNamesState, setAllNamesState] = useState<IName[]>([] as IName[])

	const [enumProductStatusState, setEnumProductStatusState] = useState({})
	const [enumProductFlagsState, setEnumProductFlagsState] = useState({})

	const [allBrandsState, setAllBrandsState] = useState<IBrand[]>([] as IBrand[])

	const [selectCurrentCategory, setSelectCurrentCategory] = useState<ICategory>(
		{} as ICategory
	)

	const [imageSelectState, setImageSelectState] = useState<string[]>(
		[] as string[]
	)

	const { mutate: getEnumProductStatus } = useMutation(
		['getEnumProductStatus'],
		() => ProductsServices.getEnumProductStatus(),
		{
			onSuccess(data) {
				setEnumProductStatusState(data)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getBrands } = useMutation(
		['getBrands'],
		() => BrandServices.getBrands(),
		{
			onSuccess(data) {
				setAllBrandsState(data)
				setProduct({
					...product,
					brandId: parseInt(data[0]._id)
				})
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getSubCategories } = useMutation(
		['getSubCategories'],
		() => SubCategoryServices.getSubCategories(),
		{
			onSuccess(data: ISubCategory[]) {
				setAllSubCategoriesState(data)
				setProduct({
					...product,
					subCategoryId: data[0]._id
				})

				allCategoriesState.forEach(element => {
					element.subCategory.forEach(subElement => {
						if (subElement._id == data[0]._id) {
							setProduct({ ...product, categoryId: element._id })
						}
					})
				})
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getNames } = useMutation(
		['getNames'],
		() => NameServices.getNames(),
		{
			onSuccess(data: IName[]) {
				setAllNamesState(data)
				setProduct({
					...product,
					nameId: data[0]._id
				})
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getCategoriesChild } = useMutation(
		['getCategoriesChild'],
		() => CategoriesServices.getCategoriesChild(),
		{
			onSuccess(data: ICategoryChild[]) {
				setAllCategoriesState(data)
				setProduct({ ...product, categoryId: data[0]._id })
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getEnumProductFlags } = useMutation(
		['getENumProductFlags'],
		() => ProductsServices.getEnumProductFlags(),
		{
			onSuccess(data) {
				setEnumProductFlagsState(data)
			},

			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	useEffect(() => {
		getCategoriesChild()
		getSubCategories()
		getEnumProductFlags()
		getEnumProductStatus()
		getBrands()
		getNames()
	}, [getCategoriesChild, getSubCategories, getEnumProductFlags, getEnumProductStatus, getBrands, getNames])

	// Set Colors
	function buttonFunction(e: any) {
		e.preventDefault()
		let colorArray = product.color ? product.color : []
		colorArray.push(productColor)

		setProduct({ ...product, color: colorArray })

		setProductColor('')
	}

	// Mutation
	const { mutate: createProduct } = useMutation(
		['createProduct'],
		(data: ICreateProduct) => ProductsServices.createProduct({ ...data }),
		{
			onSuccess(data) {
				console.log('Success')
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	// FormData
	function formDataState(file: any) {
		if (file) {
			let formData = new FormData()
			formData.append('image', file)
			formData.append('someKey', 'someValue')

			setFormDataState(formData.entries)
		}
	}

	// Submit -----------------------------------------
	function onChangeHandler(e: any) {
		if (e.target.files.length) {
			for (let index = 0; index < e.target.files.length; index++) {
				const formData = new FormData()
				formData.append('file', e.target.files[index])

				createImage(formData)
			}

			setProduct({ ...product, image: imageSelectState })
		}
	}

	useEffect(() => {
		formDataState(selectedFile)
	}, [selectedFile])

	// Submit Button
	function submitButtonFunc(e: any) {
		e.preventDefault()
		createProduct(product)
	}

	const [newFormInputState, setNewFormInputState] = useState(null)

	// Mutation
	const { mutate: createImage } = useMutation(
		['createImage'],
		(data: FormData) => ImageServices.createImage(data),
		{
			onSuccess(data) {
				let currentArrayImages = imageSelectState
				currentArrayImages.push(data.filePath)
				setImageSelectState(currentArrayImages)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	const { mutate: getImage } = useMutation(
		['getImage'],
		(data: number) => ImageServices.getImage(data),
		{
			onSuccess(data) {
				console.log('Success')
				setImage(data)
			},
			onError(data: any) {
				console.log(data.response.status)
			}
		}
	)

	function sendImage(e: any) {
		e.preventDefault()

		const formData = new FormData()

		formData.append('file', e.target.files[0])

		createImage(formData)
	}

	const [image, setImage] = useState<File>({} as File)

	function enumHandlerFunc(object: any) {
		const options = []

		for (let element in object) {
			options.push(
				<option key={element} value={element}>
					{object[element]}
				</option>
			)
		}

		return options
	}

	function changeCategoryHandler(e: any) {
		setProduct({ ...product, categoryId: parseInt(e.target.value) })

		allCategoriesState.forEach(element => {
			if (element._id == product.categoryId) {
				setSelectCurrentCategory(element)
			}
		})
	}

	return (
		<div className={styles.admin}>
			<form id='admin'>
				<label>
					<p>Введіть ім&apos;я товару</p>
					<input
						onChange={e => setProduct({ ...product, model: e.target.value })}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
						value={product.model}
					/>
				</label>
				<label>
					<p>Введіть кольори товару</p>
					<input
						onChange={e => setProductColor(e.target.value)}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
						value={productColor}
					/>
					<button onClick={buttonFunction}>Submit</button>

					<div className='flex flex-col items-start'>
						{product.color
							? product.color.map((el, index) => {
									return (
										<p
											className={`p-[12px]`}
											style={{ backgroundColor: el }}
											key={index}
										>
											{el}
										</p>
									)
							  })
							: undefined}
					</div>
				</label>
				<label>
					<p>Виберіть status товару</p>
					<select
						onChange={e => setProduct({ ...product, status: e.target.value })}
					>
						{enumHandlerFunc(enumProductStatusState)}
					</select>
				</label>
				{/* <=--------------------------------------------------------------------------=> */}
				<label>
					<p>Виберіть картинку товару</p>
					<input
						onChange={onChangeHandler}
						className='border-2 border-solid border-black'
						type='file'
						placeholder=''
						name='image'
						multiple
					/>
				</label>
				{/* <=--------------------------------------------------------------------------=> */}
				<label>
					<p>Введіть ціну товару</p>
					<input
						onChange={e => setProduct({ ...product, price: e.target.value })}
						className='border-2 border-solid border-black'
						type='number'
						placeholder=''
						value={product.price}
					/>
				</label>
				<label>
					<p>Введіть знижку товару</p>
					<input
						onChange={e => setProduct({ ...product, discount: e.target.value })}
						className='border-2 border-solid border-black'
						type='number'
						placeholder=''
						value={product.discount}
					/>
				</label>
				<label>
					<p>Введіть опис товару</p>
					<input
						onChange={e =>
							setProduct({ ...product, description: e.target.value })
						}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
						value={product.description}
					/>
				</label>
				<label>
					<p>Введіть характеристику товару</p>
					<input
						onChange={e =>
							setProduct({ ...product, characteristics: e.target.value })
						}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
						value={product.characteristics}
					/>
				</label>
				<label>
					<p>Виберіть категорію товару</p>
					<select value={product.categoryId} onChange={changeCategoryHandler}>
						{allCategoriesState.map((element, index) => {
							return (
								<option value={element._id} key={index}>
									{element.name}
								</option>
							)
						})}
					</select>
				</label>
				<label>
					<p>Введіть subCategory</p>
					<select
						value={product.subCategoryId}
						onChange={e =>
							setProduct({
								...product,
								subCategoryId: parseInt(e.target.value)
							})
						}
					>
						{allSubCategoriesState.map((element, index) => {
							return (
								<option key={index} value={element._id}>
									{element.name}
								</option>
							)
						})}
					</select>
					<p>{product.subCategoryId}</p>
				</label>
				<label>
					<p>Введіть productName</p>
					<select
						value={product.nameId}
						onChange={e =>
							setProduct({
								...product,
								nameId: parseInt(e.target.value)
							})
						}
					>
						{allNamesState.map((element, index) => {
							return (
								<option key={index} value={element._id}>
									{element.name}
								</option>
							)
						})}
					</select>
					<p>{product.nameId}</p>
				</label>
				<label>
					<p>Виберіть brand товару</p>
					<select
						value={product.brandId}
						onChange={e =>
							setProduct({ ...product, brandId: parseInt(e.target.value) })
						}
					>
						{allBrandsState.map((element, index) => {
							return (
								<option value={element._id} key={index}>
									{element.name}
								</option>
							)
						})}
					</select>
				</label>
				<label>
					<p>Введіть article</p>
					<input
						onChange={e => setProduct({ ...product, article: e.target.value })}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
					/>
				</label>
				<label>
					<p>Введіть термін гарантії</p>
					<input
						onChange={e =>
							setProduct({ ...product, guarantee: e.target.value })
						}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
					/>
				</label>
				<label>
					<p> Please to enter slug</p>
					<input
						onChange={e => setProduct({ ...product, slug: e.target.value })}
						className='border-2 border-solid border-black'
						type='text'
						placeholder=''
					/>
				</label>
				<label>
					<p>Please to enter flag</p>

					<select
						onChange={e => setProduct({ ...product, flag: e.target.value })}
					>
						{enumHandlerFunc(enumProductFlagsState)}
					</select>
				</label>
				<ButtonGreen onClick={submitButtonFunc}>Submit</ButtonGreen>
			</form>

			<Category />
			<Brand />
			<SubCategory />
			<Name />
		</div>
	)
}

export default Admin
