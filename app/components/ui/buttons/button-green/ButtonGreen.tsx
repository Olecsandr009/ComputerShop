import { ReactNode } from 'react'

import { useTheme } from '../../../../hooks/useTheme'

interface IButton {
	children?: ReactNode
	className?: string
	option?: 'link' | 'button'
	onClick?: (e: any) => void
}

export default function ButtonGreen({
	children,
	className,
	option = 'button',
	onClick
}: IButton) {
	const { theme, setTheme } = useTheme()
	if (option && option === 'link') {
		return (
			<a
				href='#'
				onClick={onClick}
				style={{ backgroundColor: theme.primary }}
				className={
					`font-semibold text-normal text-white pt-1 pb-2 px-5 flex items-center gap-1` +
					' ' +
					className
				}
			>
				{children}
			</a>
		)
	} else {
		return (
			<button
				onClick={onClick}
				style={{ backgroundColor: theme.primary }}
				className={
					`font-semibold text-normal text-white pt-1 pb-2 px-5 hover:opacity-95 flex items-center gap-1` +
					' ' +
					className
				}
			>
				{children}
			</button>
		)
	}
}
