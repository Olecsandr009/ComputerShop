import BreadCrumbs from '../../../app/components/bread-crumbs/bread-crumbs'
import Header from '../../../app/components/header/Header'
import ProfileSaitbar from '../../../app/components/profileSaitbar/ProfileSaitbar'
import { Container } from '../../../app/ui/container/Container'

const Bonuses = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'My bonuses']} />
			<Container className={'flex items-start'}>
				<ProfileSaitbar />
				<div>MY Bonuses</div>
			</Container>
		</>
	)
}

export default Bonuses
