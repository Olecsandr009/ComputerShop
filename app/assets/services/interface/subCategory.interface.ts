import { IName } from './name.interface'

export interface ISubCategory {
	_id: number
	name: string
	image: string
}

export interface ICreateSubCategory {
	name: string
	image: string
	categoryId: number
}

export interface ISubCategoryChild {
	_id: number
	name: string
	image: string
	nameProduct: IName[]
}
