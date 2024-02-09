export const Container = ({ children, className }: any) => {
	return (
		<div
			style={{
				maxWidth: 1590,
				paddingLeft: 32,
				paddingRight: 32,
			}}
			className={'mx-auto px-8' + ' ' + className}
		>
			{children}
		</div>
	)
}
