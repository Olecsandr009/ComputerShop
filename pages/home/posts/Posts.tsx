import { AiFillLike } from 'react-icons/ai'
import { IoMdEye } from 'react-icons/io'
import { MdMessage } from 'react-icons/md'

import ButtonGreen from '../../../app/ui/button-green/ButtonGreen'
import { Container } from '../../../app/ui/container/Container'

export default function Posts() {
	return (
		<section className=' mb-20'>
			<Container>
				<h3 className='text-center font-semibold text-3xl mb-10'>
					Статьи и обзоры
				</h3>

				<div className='grid grid-cols-4 gap-8 mb-10'>
					<a
						href='#'
						className='flex flex-col shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
					>
						<div>
							<img src='/img/posts/image.jpg' />
						</div>
						<div className='flex flex-col items-start py-2 px-4 h-full'>
							<p className='mb-2 py-1 px-5 font-semibold text-xs text-white inline-block bg-green-600'>
								Обзоры
							</p>
							<p className='font-semibold mb-4 block max-h-12 h-full overflow-hidden'>
								Вапорайзер Arizer Air: могущество и сила в одном корпусе!
							</p>
							<p className='text-sm mb-5'>
								Сегодня в нашем фокусе мобильный вапорайзер, который с легкостью
								умещается на ладони и не занимает много места — Arizer Air. Этот
								волшебный девайс предлагает...
							</p>
							<div className='mt-auto w-full flex items-center gap-5 py-4 border-t border-gray-500'>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									<IoMdEye />
									485
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-baseline'>
									23
									<AiFillLike />
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									4
									<MdMessage />
								</button>

								<p className='text-sm text-gray-500 ml-auto'>28 ноября 2020</p>
							</div>
						</div>
					</a>
					<a
						href='#'
						className='flex flex-col shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
					>
						<div>
							<img src='/img/posts/image2.jpg' />
						</div>
						<div className='flex items-start flex-col py-2 px-4 h-full'>
							<p className='mb-2 py-1 px-5 inline-block font-semibold text-xs text-white bg-green-600'>
								Обзоры
							</p>
							<p className='font-semibold mb-4 block max-h-12 h-full overflow-hidden'>
								Обзор Magical Butter Machine MB2E
							</p>
							<p className='text-sm mb-5'>
								Помимо курения и выпаривания всеми нами любимой волшебной
								растительной субстанции, существуют альтернативные, невероятно
								вкусные и полезные способы ее потребления...
							</p>
							<div className='mt-auto w-full flex items-center gap-5 py-4 border-t border-gray-500'>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									<IoMdEye />
									485
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-baseline'>
									23
									<AiFillLike />
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									4
									<MdMessage />
								</button>

								<p className='text-sm text-gray-500 ml-auto'>28 ноября 2020</p>
							</div>
						</div>
					</a>
					<a
						href='#'
						className='flex flex-col shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
					>
						<div>
							<img src='/img/posts/image3.jpg' />
						</div>
						<div className='flex flex-col py-2 items-start px-4 h-full'>
							<p className='mb-2 py-1 px-5 inline-block font-semibold text-xs text-white bg-green-600'>
								Лайфхаки и советы
							</p>
							<p className='font-semibold mb-4 block max-h-12 h-full overflow-hidden'>
								Бонсай из каннабиса: большое искусство из маленького дерева
							</p>
							<p className='text-sm mb-5'>
								Старинное японское искусство выращивания карликовых деревьев в
								горшках под названием бонсай привлекает не только потомков
								самураев с их уточенным культом любования природой...
							</p>
							<div className='mt-auto w-full flex items-center gap-5 py-4 border-t border-gray-500'>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									<IoMdEye />
									485
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-baseline'>
									23
									<AiFillLike />
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									4
									<MdMessage />
								</button>

								<p className='text-sm text-gray-500 ml-auto'>28 ноября 2020</p>
							</div>
						</div>
					</a>
					<a
						href='#'
						className='flex flex-col shadow-[0px_0px_20px_rgba(0,0,0,0.1)]'
					>
						<div>
							<img src='/img/posts/image4.jpg' />
						</div>
						<div className='flex flex-col items-start py-2 px-4 h-full'>
							<p className=' py-1 px-5 mb-2 inline-block font-semibold text-xs text-white bg-green-600'>
								Инфо статьи
							</p>
							<p className='font-semibold mb-4 block max-h-12 h-full overflow-hidden'>
								Влияние каннабиса на сон: плюсы и минусы
							</p>
							<p className='text-sm mb-5'>
								Внимание! Магазин DuDa в курсе, что каннабис значится в списке
								запрещенных препаратов и не поощряет распространение,
								употребление и пропаганду наркотиков. Но факт остается...
							</p>
							<div className='mt-auto flex items-center gap-5 py-4 border-t border-gray-500 w-full'>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									<IoMdEye />
									485
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-baseline'>
									23
									<AiFillLike />
								</button>
								<button className='flex gap-1 text-sm text-gray-500 items-center'>
									4
									<MdMessage />
								</button>

								<p className='text-sm text-gray-600 ml-auto'>28 ноября 2020</p>
							</div>
						</div>
					</a>
				</div>
				<div className='flex justify-center'>
					<ButtonGreen option='link'>смотреть все статьи</ButtonGreen>
				</div>
			</Container>
		</section>
	)
}
