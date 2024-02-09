import Link from 'next/link'
import { ImFacebook2 } from 'react-icons/im'
import { RiInstagramFill } from 'react-icons/ri'
import { SiTelegram } from 'react-icons/si'

import { Container } from '../../container/Container'

export default function Footer() {
	return (
		<footer className=' pt-16 bg-zinc-900'>
			<section className=' relative pb-16 border-b border-gray-700'>
				<a className='absolute top-0 right-0' href='#'>
					наверх
				</a>
				<Container className='grid grid-cols-12 gap-8'>
					<div className='col-span-3'>
						<Link href={'/home'}>
							<a className={'mb-5 block w-[75px] h-[75px]'}>
								<img src='/img/LOGO.png' alt='Logo' />
							</a>
						</Link>
						<div className='px-5 flex flex-col'>
							<a
								className='font-bold text-lg text-white mb-2'
								href='tel:+380504652666'
							>
								+38 (050) 465-26-66
							</a>
							<a
								className='font-bold text-lg text-white mb-2'
								href='tel:+380637527300'
							>
								+38 (063) 752-73-00
							</a>
							<a
								className='font-bold text-lg text-white mb-3'
								href='tel:+380674640842'
							>
								+38 (067) 464-08-42
							</a>
							<p className='text-sm text-green-400 max-w-[150px] text-center'>
								Зробили щасливими більше 45780 клієнтів
							</p>
						</div>
					</div>
					<div className='col-span-3'>
						<h3 className='font-bold text-lg text-white mb-3'>Навігація</h3>

						<ul className='flex flex-col gap-4 text-sm text-white'>
							<li>
								<a className=' opacity-70 hover:opacity-100' href='#'></a>
							</li>
						</ul>
					</div>
					<div className='col-span-3'>
						<h3 className='font-bold text-lg text-white mb-3'>Корисні силки</h3>

						<ul className='flex flex-col gap-4 text-sm text-white'>
							<li>
								<a className=' opacity-70 hover:opacity-100' href='#'></a>
							</li>
						</ul>
					</div>
					<div className='col-span-3'>
						<h3 className='font-bold text-lg text-white mb-3'>Компанія</h3>

						<ul className='flex flex-col gap-4 text-sm text-white'>
							<li>
								<a className=' opacity-70 hover:opacity-100' href='#'></a>
							</li>
						</ul>
					</div>
				</Container>
			</section>
			<section>
				<Container className='pb-5 pt-5 flex items-center justify-between'>
					<p className='text-sm opacity-70 text-white'>
						© 2013-2021 Всі права захищені.{' '}
					</p>
					<div className='flex items-center gap-8 text-white '>
						<a className='opacity-70 hover:opacity-100 text-2xl' href='#'>
							<SiTelegram />
						</a>
						<a className='opacity-70 hover:opacity-100 text-2xl' href='#'>
							<RiInstagramFill />
						</a>
						<a className='opacity-70 hover:opacity-100 text-2xl' href=''>
							<ImFacebook2 />
						</a>
					</div>
				</Container>
			</section>
		</footer>
	)
}
