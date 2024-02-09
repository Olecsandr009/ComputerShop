import { ISubCategory } from './subCategory.interface'

export interface ICategory {
	name: string
	_id: number
}

export interface ICreateCategory {
	name: string
}

export interface ICategoryChild {
	_id: number
	name: string
	subCategory: ISubCategory[]
}
