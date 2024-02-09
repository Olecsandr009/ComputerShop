export interface ICreateProduct {
	model: string
	nameId: number
	image: string[]
	color: string[]
	status: string
	price: string
	discount: string
	description: string
	characteristics: string
	categoryId: number
	subCategoryId: number
	article: string
	guarantee: string
	slug: string
	flag: string
	brandId: number
}

export interface IProduct {
	_id: number
	model: string
	nameId: number
	image: string[]
	color: string[]
	status: string
	price: string
	discount: string
	description: string
	characteristics: string
	categoryId: number
	subCategoryId: number
	article: string
	guarantee: string
	slug: string
	flag: string
	brandId: number
}
