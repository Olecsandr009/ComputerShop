import { IProduct } from './product.interface'

export interface ICreateName {
	name: string
	subCategoryId: number
}

export interface IName {
	_id: number
	name: string
}

export interface INameChild {
	_id: number
	name: string
	product: IProduct[]
}
