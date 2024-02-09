import Link from 'next/link'
import { FC } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import styles from '../Header.module.scss'
import { INavMenu } from '../interface/navigation.interface'

interface INavItem {
	name: string
	link: string
	isMenu: boolean
	menu?: INavMenu[]
}

const NavItem: FC<INavItem> = ({ name, link, isMenu, menu }) => {
	if (!isMenu) {
		return (
			<Link className={styles.headerNavigationLink} href={link}>
				{name}
			</Link>
		)
	} else {
		return (
			<div className={styles.headerNavigationLink}>
				{name}
				<MdKeyboardArrowDown />
				<div className={styles.headerNavigationMenu}>
					<ul className={styles.headerNavigationMenuList}>
						{menu
							? menu.map((el, index) => (
									<li key={index} className={styles.headerNavigationMenuItem}>
										<Link href={el.link}>
											<a className={styles.headerNavigationMenuLink}>
												{el.name}
											</a>
										</Link>
									</li>
							  ))
							: null}
					</ul>
				</div>
			</div>
		)
	}
}

export default NavItem
