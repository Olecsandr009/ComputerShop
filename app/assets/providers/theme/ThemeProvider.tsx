import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

export interface IThemeContext {
	theme: ITheme
	setTheme: (option: string) => void
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export interface ITheme {
	primary: string
	backgroundPrimary: string
	backgroundSecondary: string
	text: string
}

const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [currentThemeState, setCurrentThemeState] = useState<ITheme>(
		{} as ITheme
	)

	function setThemeHandler(option: string) {
		switch (option) {
			case 'green':
				setCurrentThemeState({
					primary: '#08A045',
					backgroundPrimary: 'rgb(255 255 255)',
					backgroundSecondary: '',
					text: 'rgb(0 0 0)'
				})
				break
			case 'black':
				setCurrentThemeState({
					primary: 'white',
					backgroundPrimary: '#161616',
					backgroundSecondary: '#000000',
					text: 'white'
				})
				break
			case 'blue':
				setCurrentThemeState({
					primary: 'rgb(0 0 255)',
					backgroundPrimary: 'rgb(255 255 255)',
					backgroundSecondary: '',
					text: 'rgb(0 0 0)'
				})
				break
		}
	}

	useEffect(() => {
		setThemeHandler('green')
	}, [])

	return (
		<ThemeContext.Provider
			value={{ theme: currentThemeState, setTheme: setThemeHandler }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
