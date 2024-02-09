import { FC } from 'react'

import { useTheme } from '../../../hooks/useTheme'

import styles from './Title.module.scss'

const Title: FC<{ children: string }> = ({ children }) => {
	const { theme, setTheme } = useTheme()
	return (
		<h2 className={`${styles.title} after:border-[${theme.primary}]`}>
			{children}
		</h2>
	)
}

export default Title
