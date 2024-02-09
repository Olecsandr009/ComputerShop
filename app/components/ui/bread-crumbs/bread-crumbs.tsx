import Link from 'next/link'
import { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import { Container } from '../../ui/container/Container'

import styles from './bread-crumbs.module.scss'

interface IBreadCrumbs {
	breadSettings: string[]
}

const BreadCrumbs: FC<IBreadCrumbs> = ({ breadSettings }) => {
	return (
		<section className={styles.breadCrumbsSection}>
			<Container className={styles.breadCrumbsContainer}>
				<Link href={'/home'}>
					<a className={styles.breadCrumbsLink}>DUDA</a>
				</Link>
				<IoIosArrowForward />

				{breadSettings
					? breadSettings.map((el, index) => {
							return (
								<>
									<Link key={index} href={`/products/${el}`}>
										<a className={styles.breadCrumbsLink}>{el}</a>
									</Link>

									{breadSettings.length - 1 <= index ? undefined : (
										<IoIosArrowForward />
									)}
								</>
							)
					  })
					: undefined}
			</Container>
		</section>
	)
}

export default BreadCrumbs
