import { RefObject, useRef, useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

import { useSpoler } from '../../hooks/useSpoler/useSpoler'

import styles from './spoler.module.scss'

const Spoler = () => {
	const [spolerState, setSpolerState] = useState(false)

	const spolerRefDeliver = useRef() as RefObject<HTMLDivElement> | null
	const spolerRefDeliverLink = useRef() as RefObject<HTMLDivElement> | null

	const spolerRefPayment = useRef() as RefObject<HTMLDivElement> | null
	const spolerRefPaymentLink = useRef() as RefObject<HTMLDivElement> | null

	const spolerRefGuarantee = useRef() as RefObject<HTMLDivElement> | null
	const spolerRefGuaranteeLink = useRef() as RefObject<HTMLDivElement> | null

	useSpoler(spolerRefDeliver, spolerRefDeliverLink)
	useSpoler(spolerRefPayment, spolerRefPaymentLink)
	useSpoler(spolerRefGuarantee, spolerRefGuaranteeLink)

	function onClickFunc(e: any) {
		e.target.classList.toggle('active')
	}

	return (
		<div className={styles.spoler}>
			<div className={styles.spolerBlock}>
				<div
					onClick={onClickFunc}
					className={styles.spolerTitle}
					ref={spolerRefDeliverLink}
				>
					<h3 className={styles.spolerTitleText}>
						Доставка в <span className={styles.spolerSpan}>Київ</span>
					</h3>
					<MdOutlineArrowForwardIos className={styles.spolerTitleIcon} />
				</div>
				<div className={styles.spolerContent} ref={spolerRefDeliver}>
					<div className={styles.spolerCols}>
						<p className={styles.spolerText}>Самовивіз з Нової пошти</p>
						<p className={styles.spolerTextCenter}>Відправимо сьогодні</p>
						<p className={styles.spolerFree}>Безкоштовно</p>
						<p className={styles.spolerText}>
							Самовивіз з поштомата Нової пошти
						</p>
						<p className={styles.spolerTextCenter}>Відправимо сьогодні</p>
						<p className={styles.spolerFree}>Безкоштовно</p>
						<p className={styles.spolerText}>Самовивіз з JustIn</p>
						<p className={styles.spolerTextCenter}>Відправимо 12 жовтня</p>
						<p className={styles.spolerPrice}>30 грн</p>
						<p className={styles.spolerText}>Самовивіз з УкрПошта</p>
						<p className={styles.spolerTextCenter}>Відправимо 7 жовтня</p>
						<p className={styles.spolerPrice}>50 грн</p>
					</div>
				</div>
			</div>
			<div className={styles.spolerBlock}>
				<div
					onClick={onClickFunc}
					className={styles.spolerTitle}
					ref={spolerRefPaymentLink}
				>
					<h3 className={styles.spolerTitleText}>Оплата</h3>
					<MdOutlineArrowForwardIos className={styles.spolerTitleIcon} />
				</div>
				<div className={styles.spolerContent} ref={spolerRefPayment}>
					<div className={styles.spolerCols}>
						<p className={styles.spolerText}>Самовивіз з Нової пошти</p>
						<p className={styles.spolerTextCenter}>Відправимо сьогодні</p>
						<p className={styles.spolerFree}>Безкоштовно</p>
						<p className={styles.spolerText}>
							Самовивіз з поштомата Нової пошти
						</p>
						<p className={styles.spolerTextCenter}>Відправимо сьогодні</p>
						<p className={styles.spolerFree}>Безкоштовно</p>
						<p className={styles.spolerText}>Самовивіз з JustIn</p>
						<p className={styles.spolerTextCenter}>Відправимо 12 жовтня</p>
						<p className={styles.spolerPrice}>30 грн</p>
						<p className={styles.spolerText}>Самовивіз з УкрПошта</p>
						<p className={styles.spolerTextCenter}>Відправимо 7 жовтня</p>
						<p className={styles.spolerPrice}>50 грн</p>
					</div>
				</div>
			</div>
			<div className={styles.spolerBlock}>
				<div
					onClick={onClickFunc}
					className={styles.spolerTitle}
					ref={spolerRefGuaranteeLink}
				>
					<h3 className={styles.spolerTitleText}>Гарантия</h3>
					<MdOutlineArrowForwardIos className={styles.spolerTitleIcon} />
				</div>
				<div className={styles.spolerContent} ref={spolerRefGuarantee}>
					<p className={styles.spolerText} style={{ paddingLeft: '30px' }}>
						5 років обмеженої гарантії. Обмін/повернення протягом 14 днів
					</p>
				</div>
			</div>
		</div>
	)
}

export default Spoler
