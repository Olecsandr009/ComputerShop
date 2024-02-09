import BreadCrumbs from '../../../app/components/bread-crumbs/bread-crumbs'
import Header from '../../../app/components/header/Header'
import ProfileSaitbar from '../../../app/components/profileSaitbar/ProfileSaitbar'
import { Container } from '../../../app/ui/container/Container'

const Orders = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Orders']} />
			<Container className={'flex items-start'}>
				<ProfileSaitbar />
				<div>My orders</div>
			</Container>
		</>
	)
}

export default Orders
