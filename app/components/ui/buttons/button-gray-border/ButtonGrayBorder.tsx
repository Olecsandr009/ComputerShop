import styles from './ButtonGrayBorder.module.scss'

export default function ButtonGrayBorder({
	children,
	className,
	option,
	onClick
}: any) {
	if (option && option === 'link') {
		return (
			<a
				href='#'
				onClick={onClick}
				className={`${styles.btnGrayBorder}` + ' ' + className}
			>
				{children}
			</a>
		)
	} else {
		return (
			<button
				onClick={onClick}
				className={`${styles.btnGrayBorder}` + ' ' + className}
			>
				{children}
			</button>
		)
	}
}
