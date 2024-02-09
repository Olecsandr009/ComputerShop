import Header from '../../../app/components/ui/Layout/header/Header'
import BreadCrumbs from '../../../app/components/ui/bread-crumbs/bread-crumbs'
import { Container } from '../../../app/components/ui/container/Container'
import ProfileSaitbar from '../profileSaitbar/ProfileSaitbar'

import ProfileUserData from './profileUserData/ProfileUserData'

const PersonalData = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Personal Data']} />
			<Container className='flex items-start'>
				<ProfileSaitbar />
				<ProfileUserData />
			</Container>
		</>
	)
}

export default PersonalData
