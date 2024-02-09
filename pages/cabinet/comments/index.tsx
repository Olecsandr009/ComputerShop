import BreadCrumbs from '../../../app/components/bread-crumbs/bread-crumbs'
import Header from '../../../app/components/header/Header'
import ProfileSaitbar from '../../../app/components/profileSaitbar/ProfileSaitbar'
import { Container } from '../../../app/ui/container/Container'

const Comments = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Comments']} />
			<Container className={'flex items-start'}>
				<ProfileSaitbar />
				<div>Comments</div>
			</Container>
		</>
	)
}

export default Comments
