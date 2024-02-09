import { SlArrowDown } from 'react-icons/sl'

import { Container } from '../../../app/ui/container/Container'

export default function About() {
	return (
		<section className='mb-20 shadow-[0px_0px_20px_rgba(0,0,0,0.04)]'>
			<Container>
				<h3 className='pt-10 font-semibold text-3xl mb-10 text-center'>
					Интернет магазин DUDA{' '}
				</h3>

				<div className='w-full'>
					<p className='font-bold text-lg mb-5'>Наши принципы</p>

					<p className='text-gray-900 mb-10'>
						А теперь о наших принципах. Мы за здоровый образ жизни, но и
						легалайз нам ближе, чем продажа водки и пива на каждом углу и
						реклама алкоголя на всех ТВ каналах и СМИ. Мы против наркомании,
						наркопритонов, драгдилеров и наркотрафика. Но спаивание народа
						дешёвым пивом, продаваемом как продукт успеха, счастья и всеобщего
						веселья, категорически нами неприемлем. Не будем углубляться в
						милицейскую статистику лёгких правонарушений и тяжёлых преступлений.
						Она очевидна и известна всем. Алкоголь, как причина этих наказуемых
						деяний, лидирует с большим отрывом. Одним словом, мы никого ни в чём
						не убеждаем и не агитируем. Но кто с нами — прогуляйтесь по нашему
						магазину! Может быть найдёте для себя что-то интересное.
					</p>

					<div className='w-full'>
						<SlArrowDown className='mx-auto' />
					</div>
				</div>
			</Container>
		</section>
	)
}