import Header from '../../../app/components/ui/Layout/header/Header'
import BreadCrumbs from '../../../app/components/ui/bread-crumbs/bread-crumbs'
import { Container } from '../../../app/components/ui/container/Container'
import ProfileSaitbar from '../profileSaitbar/ProfileSaitbar'

const Compare = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Compare']} />
			<Container className={'flex items-start'}>
				<ProfileSaitbar />
				<div>Compare</div>
			</Container>
		</>
	)
}

export default Compare
