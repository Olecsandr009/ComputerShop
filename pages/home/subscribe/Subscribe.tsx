import ButtonGreen from '../../ui/button-green/ButtonGreen'
import { Container } from '../../ui/container/Container'

export default function Subscribe() {
	return (
		<section className=' bg-gray-50'>
			<Container className='flex gap-8'>
				<div className='basis-1/2 shrink-0 grow-0 flex justify-center items-center -mb-12'>
					<img src='/img/subscribe.svg' />
				</div>
				<div className='basis-1/2 shrink-0 grow-0 flex flex-col justify-center relative'>
					<div className='absolute top-[70%] left-[55%]'>
						<img src='/img/not-spam.svg' />
					</div>
					<div className=' w-[452px]'>
						<h2 className=' font-extrabold text-4xl mb-5'>
							Оставайтесь в курсе
						</h2>
						<p className='mb-10'>
							Не упустите возможность узнать первым о новостях, акциях и
							новинках в нашем интернет-магазине!
						</p>
						<form>
							<input
								type='email'
								className='mb-10 text-sm bg-transparent w-full focus:outline-none border-b border-gray-400'
								placeholder='Введите ваш email'
							/>
							<ButtonGreen className='w-full flex justify-center'>
								Подписаться
							</ButtonGreen>
						</form>
					</div>
				</div>
			</Container>
		</section>
	)
}
