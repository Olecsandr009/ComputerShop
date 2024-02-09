import { RiFilter2Line } from 'react-icons/ri'

import styles from './sidebar.module.scss'

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<h2 className={styles.sidebarTitle}>
				<RiFilter2Line /> Фільтр товарів
			</h2>
			<div></div>
		</aside>
	)
}

export default Sidebar
