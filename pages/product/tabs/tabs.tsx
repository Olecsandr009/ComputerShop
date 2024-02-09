import { Container } from '../../../app/components/ui/container/Container'

import ProductInfo from './tabWindows/productInfo'
import styles from './tabs.module.scss'

const Tabs = () => {
	return (
		<>
			<div className={styles.tabs}>
				<Container>
					<ul className={styles.tabsList}>
						<li className={`${styles.tabsItem} ${styles.tabsActive}`}>
							<button className={styles.tabsBtn}>Все про товар</button>
						</li>
						<li className={styles.tabsItem}>
							<button className={styles.tabsBtn}>Характеристики</button>
						</li>
						<li className={styles.tabsItem}>
							<button className={styles.tabsBtn}>Відгуки і питання</button>
							<p className={styles.tabsItemValue}>139</p>
						</li>
						<li className={styles.tabsItem}>
							<button className={styles.tabsBtn}>Відео-огляд</button>
						</li>
					</ul>
				</Container>

				<ProductInfo />
			</div>
		</>
	)
}

export default Tabs
