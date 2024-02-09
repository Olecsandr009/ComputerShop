import { FC } from 'react'

import styles from './reviews.module.scss'
import Stars from './stars'

interface IReviews {
	reviews: number
	reviewsLength: number
	article: string
}

const Reviews: FC<IReviews> = ({
	reviews,
	reviewsLength,
	article
}: IReviews) => {
	return (
		<section className={styles.reviewsSection}>
			<Stars reviews={reviews} />
			<p className={styles.reviewsValue}>{reviewsLength} відгуків</p>
			<p className={styles.reviewsArticle}>Артикул: {article}</p>
		</section>
	)
}

export default Reviews
