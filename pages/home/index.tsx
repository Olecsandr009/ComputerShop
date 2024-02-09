import { createContext, useState } from 'react'

import Footer from '../../app/components/ui/Layout/footer/Footer'
import Header from '../../app/components/ui/Layout/header/Header'

import Hero from './hero/Hero'

interface ICatalogContext {
	catalogState: boolean
	catalogHandler: (state: boolean) => void
}

export const CatalogContext = createContext<ICatalogContext>(
	{} as ICatalogContext
)

const Home = () => {
	const [catalogState, setCatalogState] = useState(true)

	function catalogHandler(state: boolean) {
		setCatalogState(state)
	}

	return (
		<section>
			<CatalogContext.Provider value={{ catalogState, catalogHandler }}>
				<Header />
				<main>
					<Hero />
					{/* <CategoryCarts /> */}
					{/* <Brands /> */}
					{/* <BestProduct /> */}
					{/* <Action /> */}
					{/* <AlreadyWatch /> */}
					{/* <Posts /> */}
					{/* <Feedback /> */}
					{/* <About /> */}
					{/* <Subscribe /> */}
				</main>
				<Footer />
			</CatalogContext.Provider>
		</section>
	)
}

export default Home
