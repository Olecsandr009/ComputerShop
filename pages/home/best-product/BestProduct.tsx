import ButtonGreen from '../../../app/ui/button-green/ButtonGreen'
import { Container } from '../../../app/ui/container/Container'

export default function BestProduct() {
	const products = [
		{
			name: 'Бонг из боросиликатного стекла «Faux Metal Fused Water Pipe Clear»',
			image: '/img/bestProduct/image.jpg',
			discountPercent: '-55%',
			article: '0041СВ',
			discount: '9210',
			price: '8110',
			rating: 60
		},
		{
			name: 'Бонг силиконовый «Танк»',
			image: '/img/bestProduct/image2.jpg',
			discountPercent: '',
			article: '0041СВ',
			discount: '',
			price: '1620',
			rating: 0
		},
		{
			name: 'Портативный вапорайзер «PAX 3 Vaporizer Complete Kit Sage»',
			image: '/img/bestProduct/image3.jpg',
			discountPercent: '-55%',
			article: '0041СВ',
			discount: '2130',
			price: '3370',
			rating: 2
		},
		{
			name: 'Немецкий кальян Amy «Цветок Дрездена»',
			image: '/img/bestProduct/image4.jpg',
			discountPercent: '',
			article: '0041СВ',
			discount: '',
			price: '2315',
			rating: 9
		},
		{
			name: 'Бокс для хранения «Syndicase Tin Box Rasta Leaf»',
			image: '/img/bestProduct/image5.jpg',
			discountPercent: '0',
			article: '0041СВ',
			discount: '',
			price: '365',
			rating: 0
		},
		{
			name: 'Бонг силиконовый «Безумная пчела»',
			image: '/img/bestProduct/image6.jpg',
			discountPercent: '0',
			article: '0041СВ',
			discount: '',
			price: '10190',
			rating: 3
		},
		{
			name: 'Бонг в кейсе «Алмаз»',
			image: '/img/bestProduct/image7.jpg',
			discountPercent: '-55%',
			article: '0041СВ',
			discount: '4100',
			price: '3740',
			rating: 0
		},
		{
			name: 'Гриндер из алюминия Black Leaf «Лунный свет»',
			image: '/img/bestProduct/image8.jpg',
			discountPercent: '-55%',
			article: '0041СВ',
			discount: '2130',
			price: '1410',
			rating: 0
		}
	]

	return (
		<section className='mb-20'>
			<Container className='grid grid-cols-5 gap-8'>
				<div className=' col-span-2'>
					<p className='w-full bg-green-500 flex items-center justify-center py-2 font-semibold text-white'>
						Товар дня
					</p>
					<div className='border-2 flex flex-col flex-auto justify-center border-green-500 py-8 px-16'>
						<div className=' mb-4 relative'>
							<img src={products[0].image} />
							<p className='absolute bottom-6 right-1/4 w-16 h-16 rounded-full font-semibold bg-red-600 text-white flex items-center justify-center'>
								{products[0].discountPercent}
							</p>
						</div>
						<p className='font-semibold text-black mb-5'>{products[0].name}</p>
						<div className='flex justify-between border-b border-gray-300 mb-5'>
							<div>
								<div></div>
								<p className=' text-xs text-gray-500'>({products[0].rating})</p>
							</div>
							<p className='text-xs text-gray-500'>
								Артикул: {products[0].article}
							</p>
						</div>
						<p className=' text-xl text-gray-600 line-through'>
							{products[0].discount ? products[0].discount : 'a'} грн
						</p>
						<div className='flex items-center gap-8'>
							<p className=' text-4xl flex-shrink-0 text-black'>
								{products[0].price} грн
							</p>
							<ButtonGreen className='w-full flex justify-center pt-2 pb-2.5'>
								Купить
							</ButtonGreen>
						</div>
					</div>
				</div>
				<div className='col-span-3'>
					<nav className=' mb-8'>
						<ul className='flex gap-10'>
							<li>
								<button className='font-semibold text-green-600 pb-1 border-b-2 border-green-600'>
									Специально для вас
								</button>
							</li>
							<li>
								<button className='font-semibold text-gray-900'>Новинки</button>
							</li>
							<li>
								<button className='font-semibold text-gray-900'>
									Распродажа
								</button>
							</li>
						</ul>
					</nav>
					<div className='grid grid-cols-4 gap-8'>
						{products.map((el, index) => (
							<button
								key={index}
								className='flex flex-col py-5 px-3 shadow-[0px_0px_5px_rgba(0,0,0,0.08)] hover:shadow-[0px_0px_9px_rgba(0,0,0,0.18)]'
							>
								<div className=' mb-3'>
									<img src={el.image} />
								</div>
								<p className='font-semibold text-xs w-full text-start mb-2'>
									{el.name}
								</p>
								<p className=' text-xs text-gray-700 mt-auto line-through lin'>
									{el.discount ? el.discount + ' грн' : ''}
								</p>
								<div className='flex justify-between font-semibold w-full items-center'>
									<p>{el.price} грн</p>
									<div>
										<div></div>
										<p className='text-xs text-gray-700'>({el.rating})</p>
									</div>
								</div>
							</button>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
