import BreadCrumbs from '../../../app/components/bread-crumbs/bread-crumbs'
import Header from '../../../app/components/header/Header'
import ProfileSaitbar from '../../../app/components/profileSaitbar/ProfileSaitbar'
import { Container } from '../../../app/ui/container/Container'

const ViewedProducts = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Viewed Products']} />
			<Container className={'flex items-start'}>
				<ProfileSaitbar />
				<div>Viewed Products</div>
			</Container>
		</>
	)
}

export default ViewedProducts
