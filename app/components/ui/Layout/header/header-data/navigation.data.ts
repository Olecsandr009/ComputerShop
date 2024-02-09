import { INavigation } from '../interface/navigation.interface'

export const navigation: INavigation[] = [
	{
		name: 'Про нас',
		link: '/about',
		isMenu: false
	},
	{
		name: 'Оплата і доставка',
		link: '/delivery',
		isMenu: false
	},
	{
		name: 'Контакти',
		link: './contacts',
		isMenu: false
	},
	{
		name: 'Бренди',
		link: './brands',
		isMenu: false
	},
	{
		name: 'Покупці',
		link: '',
		isMenu: true,
		menu: [
			{
				name: 'Статті',
				link: '/articles'
			},
			{
				name: 'Гарантія',
				link: '/guarantee'
			},
			{
				name: 'Допомога і FAQ',
				link: '/help-and-faq'
			},
			{
				name: 'Ремонт вапорайзера',
				link: '/repair'
			},
			{
				name: 'Бонусная программа',
				link: '/bonus'
			}
		]
	},
	{
		name: 'Акції',
		link: '',
		isMenu: true,
		menu: [
			{
				name: 'Акції',
				link: '/stock'
			}
		]
	}
]
