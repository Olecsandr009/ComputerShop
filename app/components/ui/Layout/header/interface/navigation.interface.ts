export interface INavigation {
	name: string
	link: string
	isMenu: boolean
	menu?: INavMenu[]
}

export interface INavMenu {
	name: string
	link: string
}
