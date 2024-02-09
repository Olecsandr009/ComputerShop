import BreadCrumbs from '../../../app/components/bread-crumbs/bread-crumbs'
import Header from '../../../app/components/header/Header'
import ProfileSaitbar from '../../../app/components/profileSaitbar/ProfileSaitbar'
import { Container } from '../../../app/ui/container/Container'

const expectedGoods = () => {
	return (
		<>
			<Header />
			<BreadCrumbs breadSettings={['Cabinet', 'Extended Goods']} />
			<Container className={'flex items-start'}>
				<ProfileSaitbar />
				<div>Extented Goods</div>
			</Container>
		</>
	)
}

export default expectedGoods
