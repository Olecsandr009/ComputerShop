import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import AuthProvider from '../app/assets/providers/auth/AuthProvider'
import ThemeProvider from '../app/assets/providers/theme/ThemeProvider'
import '../style/global.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={'box-border'}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<AuthProvider>
						<Component {...pageProps} />
					</AuthProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</div>
	)
}
