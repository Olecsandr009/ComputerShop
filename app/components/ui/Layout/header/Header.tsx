import Link from 'next/link'
import { useState } from 'react'
import { GrFavorite } from 'react-icons/gr'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiScalesLine, RiTruckLine } from 'react-icons/ri'

import ButtonGreen from '../../buttons/button-green/ButtonGreen'
import { Container } from '../../container/Container'
import SearchInput from '../../search/searchInput'

import styles from './Header.module.scss'
import Login from './auth/LoginProfile'
import Basket from './basket/Basket'
import HeaderCatalog from './header-catalog/header-catelog'
import { navigation } from './header-data/navigation.data'
import { phone } from './header-data/phone.data'
import NavItem from './navItem/NavItem'

const Header = () => {
	let isActive: boolean = true

	const [catalogMenuState, setCatalogMenuState] = useState(false)

	function setCAtalogMenuHandler(state: boolean) {
		setCatalogMenuState(state)
	}

	function phoneRename(phone: string): string {
		let phoneArray: string[] = phone.split('')

		for (let i = 0; i < phoneArray.length; i++) {
			if (phoneArray[i] === ' ') delete phoneArray[i]
			if (phoneArray[i] === '(') delete phoneArray[i]
			if (phoneArray[i] === ')') delete phoneArray[i]
			if (phoneArray[i] === '-') delete phoneArray[i]
		}
		return phoneArray.join('')
	}

	return (
		<header className={styles.header}>
			<section className={styles.headerTop}>
				<Container>
					<div className={styles.headerTopContent}>
						<div />
						<p className={styles.headerTopText}>
							<RiTruckLine className='mr-2 fill-black' />
							Безкоштовна доставка в{' '}
							<a href='#' className={styles.headerTopTextLink}>
								Переяслав-Хмельницький{' '}
								<MdKeyboardArrowDown className='fill-gray-700' />
							</a>
						</p>
						<div className={styles.headerTopLanguage}>
							<button
								className={
									isActive
										? `${styles.headerTopLanguageBtn} ${styles.active}`
										: `${styles.headerTopLanguageBtn}`
								}
							>
								UA
							</button>
							<span className='pb-2'>|</span>
							<button className={styles.headerTopLanguageBtn}>UA</button>
						</div>
					</div>
				</Container>
			</section>
			<section className={styles.headerCenter}>
				<Container>
					<div className={styles.headerCenterContent}>
						<Link href={'/home'}>
							<a>
								<img src='/img/LOGO.png' alt='Logo' />
							</a>
						</Link>
						<div className={styles.headerContentCenter}>
							<div className={styles.headerCenterPhone}>
								<a
									href={`tel:${phoneRename(phone[0])}`}
									className={styles.headerCenterPhoneText}
								>
									{phone[0]} <MdKeyboardArrowDown />{' '}
								</a>
								<div className={styles.headerCenterPhoneMenu}>
									{phone.map((el, index) => {
										if (index === 0) return

										return (
											<a
												href={`tel:${phoneRename(phone[index])}`}
												key={index}
												className={styles.headerCenterPhoneText}
											>
												{el}
											</a>
										)
									})}
									<button className={styles.headerCenterPhoneText}>
										+38 (050) 465-26-66
									</button>
									<div className={styles.headerCenterPhoneOrder}>
										<h4 className={styles.headerOrderTitle}>Оформити заказ</h4>
										<p className={styles.headerOrderTime}>9:00 - 20:00</p>
									</div>
									<div className={styles.headerOrderOr}>
										<span className={styles.headerOrderSpan}></span>
										<p className={styles.headerOrderText}>или</p>
										<span className={styles.headerOrderSpan}></span>
									</div>
									<ButtonGreen className='px-[12px] whitespace-nowrap'>
										Передзвонити мені
									</ButtonGreen>
								</div>
							</div>
							<SearchInput />
						</div>
						<div className={styles.headerContentRight}>
							<Login />
							<Link href={'/cabinet/compare'}>
								<a className={'block flex h-9 w-9 items-center justify-center'}>
									<RiScalesLine />
								</a>
							</Link>
							<Link href={'/cabinet/wishlist'}>
								<a className='block flex h-9 w-9 items-center justify-center'>
									<GrFavorite />
								</a>
							</Link>
							<Basket />
						</div>
					</div>
				</Container>
			</section>
			<section
				className={
					catalogMenuState
						? `${styles.headerBottom} ${styles.active}`
						: `${styles.headerBottom}`
				}
			>
				{/* <------------------------------ CATALOG----------------------------> */}
				<Container className='flex items-center gap-5'>
					<HeaderCatalog
						catalogMenuState={catalogMenuState}
						setCAtalogMenuHandler={setCAtalogMenuHandler}
					/>
					{/* <-------------------- Меню навігації -------------------------> */}
					<nav className={styles.headerNavigation}>
						<ul className={styles.headerNavigationList}>
							{navigation.map((el, index) => {
								return (
									<li key={index} className={styles.headerNavigationItem}>
										<NavItem
											name={el.name}
											link={el.link}
											isMenu={el.isMenu}
											menu={el.menu}
										/>
									</li>
								)
							})}
						</ul>
					</nav>
				</Container>
			</section>
		</header>
	)
}

export default Header
