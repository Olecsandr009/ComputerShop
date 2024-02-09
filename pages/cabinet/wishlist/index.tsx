import Header from '../../../app/components/ui/Layout/header/Header'
import BreadCrumbs from '../../../app/components/ui/bread-crumbs/bread-crumbs'
import { Container } from '../../../app/components/ui/container/Container'

const Wishlist = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Wishlist']} />
			<Container>
				<div>Wishlist</div>
			</Container>
		</>
	)
}

export default Wishlist
