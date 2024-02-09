export interface ICatalog {
	category: string
	products: ICatalogProducts[]
}

export interface ICatalogProducts {
	name: string
	link: string
	brands: IProductsBrands[]
}

export interface IProductsBrands {
	name: string
	link: string
	id: number
}
