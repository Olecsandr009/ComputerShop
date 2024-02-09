import styles from './reviews.module.scss'

const Stars = (props: any) => {
	return (
		<div className={styles.reviewsBody}>
			<div
				className={styles.reviewsActive}
				style={{ width: props.reviews }}
			></div>
		</div>
	)
}

export default Stars
