import { ICatalog } from '../interface/catalog.interface'

export const catalog: ICatalog[] = [
	{
		category: 'Телефони',
		products: [
			{
				name: 'Смартфони',
				link: '/smartphonts',
				brands: [
					{
						name: 'Смартфон 2E F572L 2018 DualSim',
						link: '2Ef572L2018DualSim',
						id: 12345678
					},
					{
						name: 'Смартфон 2E E500A 2019 DualSim',
						link: '2Ef500A2019DualSim',
						id: 12345677
					},
					{
						name: 'Смартфон 2E E450R DualSim',
						link: '2Ee450RDualSim',
						id: 12345676
					},
					{
						name: 'Смартфон 2E E500A DualSim',
						link: '2Ee500ADualSim',
						id: 12345675
					},
					{
						name: 'Смартфон 2E E450A DualSim',
						link: '2Ee450ADualSim',
						id: 12345674
					}
				]
			},
			{
				name: 'Мобільні телефони',
				link: '/mobile-phones',
				brands: [
					{
						name: 'Мобільний телефон 2E E280 2022 Dual SIM',
						link: '2Ee2802022DualSIM',
						id: 12345674
					},
					{
						name: 'Мобільний телефон 2E E240 2022 Dual SIM',
						link: '2Ee2402022DualSIM',
						id: 12345673
					},
					{
						name: 'Мобільний телефон S180 2021 Dual SIM без ЗП',
						link: 's1802021DualSIM',
						id: 12345672
					},
					{
						name: 'Мобільний телефон 2E E240 2020 Dual SIM',
						link: '2Ee2402020DualSIM',
						id: 12345671
					},
					{
						name: 'Мобільний телефон 2E E240 POWER DualSim',
						link: '2Ee240POWERDualSim',
						id: 12345670
					},
					{
						name: 'Мобільний телефон 2E R240 (2020) Track DualSim',
						link: '2Er2402020TrackDualSim',
						id: 12345669
					}
				]
			},
			{
				name: 'Дротові телефони',
				link: '/cordet-phones',
				brands: [
					{
						name: 'Аналоговий телефон 2E AP-410',
						link: '/2eap410',
						id: 12345668
					},
					{
						name: 'Аналоговий телефон 2E AP-310',
						link: '/2eap310',
						id: 12345667
					},
					{
						name: 'Аналоговий телефон 2E AP-210',
						link: '/2eap210',
						id: 12345666
					}
				]
			}
		]
	},
	{
		category: 'Аксесуари до телефона',
		products: [
			{
				name: 'Зарядні пристрої',
				link: '/chargers',
				brands: [
					{
						name: 'Мережевий ЗП 2E USB-C Wall Charger GaN 65W',
						link: '/2eusbcwallchrgergan65w',
						id: 12345665
					},
					{
						name: 'Мережевий ЗП 2E USB Wall Charger QC, PD, Max 30W',
						link: '/2eusbwallchargerqc',
						id: 12345664
					}
				]
			}
		]
	},
	{
		category: 'Аудіо',
		products: [
			{
				name: 'Гарнітури для ПК',
				link: '/headsets',
				brands: [
					{
						name: 'Гарнітура для ПК 2E CH12 Mono On-Ear USB',
						link: '/2ech12monoonearusb',
						id: 12345663
					},
					{
						name: 'Гарнітура для ПК 2E CH12 Mono On-Ear 3.5mm/2×3.5mm',
						link: '/2ech12monoonear',
						id: 12345662
					},
					{
						name: 'Гарнітура для ПК 2E CH11 Mono USB',
						link: '/2ech11monousb',
						id: 12345661
					},
					{
						name: 'Гарнітура для ПК 2E CH11 Mono 3.5mm/2×3.5mm',
						link: '/2ech11mono3.5mm',
						id: 12345660
					}
				]
			},
			{
				name: 'Дротові навушники',
				link: '/',
				brands: [
					{
						name: '',
						link: '/',
						id: 0
					}
				]
			},
			{
				name: 'Бездротові навушники',
				link: '/',
				brands: [
					{
						name: '',
						link: '/',
						id: 0
					}
				]
			},
			{
				name: 'Звукові карти',
				link: '/',
				brands: [
					{
						name: 'Мобільний телефон 2E E280 2022 Dual SIM',
						link: '2Ee2802022DualSIM',
						id: 12345659
					},
					{
						name: 'Мобільний телефон 2E E240 2022 Dual SIM',
						link: '2Ee2402022DualSIM',
						id: 12345658
					},
					{
						name: 'Мобільний телефон S180 2021 Dual SIM без ЗП',
						link: 's1802021DualSIM',
						id: 12345657
					},
					{
						name: 'Мобільний телефон 2E E240 2020 Dual SIM',
						link: '2Ee2402020DualSIM',
						id: 12345656
					},
					{
						name: 'Мобільний телефон 2E E240 POWER DualSim',
						link: '2Ee240POWERDualSim',
						id: 12345655
					}
				]
			},
			{
				name: 'Мікрофони',
				link: '/',
				brands: [
					{
						name: '',
						link: '/',
						id: 0
					}
				]
			}
		]
	}
	// {
	// 	category: "Комп'ютори",
	// 	products: [{}]
	// },
	// {
	// 	category: 'Монітори',
	// 	products: [{}]
	// },
	// {
	// 	category: 'Ноутбуки',
	// 	products: [{}]
	// },
	// {
	// 	category: "Комплектуючі до комп'ютера",
	// 	products: [{}]
	// }
]
