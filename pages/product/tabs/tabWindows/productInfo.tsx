import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import {
	BsChevronLeft,
	BsChevronRight,
	BsFillCheckSquareFill
} from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { TbScale } from 'react-icons/tb'
import { FreeMode, Mousewheel, Thumbs } from 'swiper'
// import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IBrand } from '../../../../app/assets/services/interface/brand.interface'
import { IProduct } from '../../../../app/assets/services/interface/product.interface'
import { ProductsServices } from '../../../../app/assets/services/products.services'
import ButtonGreen from '../../../../app/components/ui/buttons/button-green/ButtonGreen'
import { Container } from '../../../../app/components/ui/container/Container'
import SlideNavigation from '../../../../app/components/ui/slide-navigation/SlideNavigation'

import styles from './productInfo.module.scss'

const ProductInfo = () => {
	const router = useRouter()
	const [swiperState, setSwiperState] = useState(false)
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
	const [product, setProduct] = useState<IProduct>({} as IProduct)
	const [allBrandState, setAllBrandState] = useState<IBrand[]>({} as IBrand[])
	const [isLoading, setIsLoading] = useState(false)

	const { mutate: getProductBySlug } = useMutation(
		['getProductBySlug'],
		(slug: string) => ProductsServices.getProductsBySlug(slug),
		{
			onSuccess(data: IProduct) {
				setProduct(data)
			},
			onError(data: any) {
				console.error(data.message)
			}
		}
	)

	useEffect(() => {
		const currentURL = Array.isArray(router.query.id)
			? router.query.id[0]
			: router.query.id || ''

		getProductBySlug(currentURL)
	}, [router.query.id])

	useEffect(() => {
		product ? setIsLoading(true) : undefined
		if (product && product._id) {
			setIsLoading(true)
		}
	}, [product])

	useEffect(() => {
		setSwiperState(true)
	}, [])

	function productPrice() {
		if (parseInt(product.discount) > 0) {
			const discountPriceValue = (
				parseInt(product.price) *
				(parseInt(product.discount) / 100)
			)
				.toString()
				.split('.')[0]
			const discountPrice = (
				parseInt(product.price) - parseInt(discountPriceValue)
			)
				.toString()
				.split('.')[0]

			return (
				<>
					<div className={styles.productInfoDiscount}>
						<p className={styles.productInfoPrice}>{discountPrice}</p>
						<p className={styles.productInfoDiscountValue}>{product.price}</p>
					</div>

					<div className={styles.productDiscountDesk}>
						<p className={styles.productDiscValue}>- {product.discount}%</p>
						<p className={styles.productDiscText}>
							Ваша скидка {discountPriceValue} грн
						</p>
					</div>
				</>
			)
		} else {
			return (
				<div className={styles.productInfoDiscount}>
					<p className={styles.productInfoPrice}>{product.price}</p>
				</div>
			)
		}
	}

	function productColor() {
		let currentColor = product.color ? product.color[0] : undefined

		return (
			<div className={styles.productColor}>
				<p className={styles.productColorText}>
					Колір: <span className={styles.productColorSpan}>{currentColor}</span>
				</p>
				<div className={styles.productColorBlocks}>
					<div className={styles.productColorList}>
						{product.color
							? product.color.map((color, index) => {
									return (
										<button
											key={index}
											className={`${styles.productColorBtn} ${styles.productColorActive}`}
											style={{ backgroundColor: color }}
										></button>
									)
							  })
							: undefined}
					</div>
					<button className={styles.productColorLink}>Всі кольори</button>
				</div>
			</div>
		)
	}

	function productImage() {
		allBrandState.length
			? allBrandState.map(brand => {
					if (brand._id == product.brandId) {
						return (
							<Image
								src={brand.image}
								alt='Brand logo'
								width={'100px'}
								height={'100px'}
							/>
						)
					}

					return <></>
			  })
			: undefined
	}

	return (
		<>
			{isLoading ? (
				<section className={styles.productInfo}>
					<Container>
						<div className={styles.productInfoBlocks}>
							<div className={styles.productInfoMedia}>
								<div className={styles.productSlider}>
									{swiperState ? (
										<>
											<Swiper
												modules={[FreeMode, Thumbs]}
												slidesPerView={1}
												thumbs={
													thumbsSwiper ? { swiper: thumbsSwiper } : undefined
												}
												spaceBetween={30}
												loop={false}
												className={styles.swiper}
											>
												{product.image
													? product.image.map((element, index) => {
															return (
																<SwiperSlide
																	className={styles.swiperSlide}
																	key={index}
																>
																	<div className={styles.productSliderSlide}>
																		<p className={styles.productSlideFlag}></p>
																		<button
																			className={styles.productSlideLoop}
																		></button>
																		<div className={styles.productSlideImage}>
																			<img alt='product image' src={element} />
																		</div>
																	</div>
																</SwiperSlide>
															)
													  })
													: undefined}
												<div className={styles.swiperNav}>
													<SlideNavigation
														className={styles.swiperButtonPrev}
														option='prev'
														disabled={styles.swiperButtonDisabled}
													>
														<BsChevronLeft />
													</SlideNavigation>
													<SlideNavigation
														className={styles.swiperButtonNext}
														option='next'
														disabled={styles.swiperButtonDisabled}
													>
														<BsChevronRight />
													</SlideNavigation>
												</div>
											</Swiper>
											<div className={styles.swiperThumbsWrapper}>
												<Swiper
													modules={[FreeMode, Thumbs, Mousewheel]}
													onSwiper={setThumbsSwiper}
													slidesPerView={'auto'}
													spaceBetween={30}
													direction={'vertical'}
													freeMode={true}
													mousewheel={true}
													className={styles.swiperThumbs}
												>
													{product.image
														? product.image.map((element, index) => {
																return (
																	<>
																		<SwiperSlide
																			className={styles.swiperSlide}
																			style={{ height: 'auto' }}
																			key={index}
																		>
																			<img src={element} alt='slide image' />
																		</SwiperSlide>
																	</>
																)
														  })
														: undefined}
													<div className={styles.swiperThumbsNav}>
														<SlideNavigation
															className={styles.swiperThumbsButtonPrev}
															option='prev'
															disabled={styles.swiperButtonDisabled}
														>
															<BsChevronLeft />
														</SlideNavigation>
														<SlideNavigation
															className={styles.swiperThumbsButtonNext}
															option='next'
															disabled={styles.swiperButtonDisabled}
														>
															<BsChevronRight />
														</SlideNavigation>
													</div>
												</Swiper>
											</div>
										</>
									) : undefined}
								</div>
							</div>
							<div className={styles.productInfoProduct}>
								<div className={styles.productInfoLeft}>
									<div className={'flex gap-3 items-center mb-8 '}>
										<BsFillCheckSquareFill className='text-[#6EC045]' />
										<p className={'text-[#2F2F2F] text-base'}>
											{product.status}
										</p>
									</div>
									{productPrice()}
									{productColor()}
								</div>
								<div className={styles.productInfoRight}>
									<div className={styles.productInfoBrandLogo}>
										{/* {productImage()} */}
									</div>
									{/* <div className={styles.productInfoPrice}>
								<p className={styles.productPriceText}>Подарунок</p>
								<div className={styles.productPriceContent}>
									<div className={styles.productPriceImage}>
										<Image
											src={productPrice}
											width='100px'
											height='100px'
											alt={'Product Price'}
										/>
									</div>
									<p className={styles.productPriceDiscount}>195 грн.</p>
									<p className={styles.productPriceTextB}>Безкоштовно</p>
								</div>
							</div> */}
								</div>
								<div className={styles.productButtons}>
									<ButtonGreen className={styles.productButtonsGreen}>
										Купити
									</ButtonGreen>
									<button className={styles.productButtonsBtn}>
										<TbScale />
									</button>
									<div className={styles.productButtonsLike}>
										<button className={styles.productButtonsBtn}>
											{false ? <FcLike /> : <AiOutlineHeart />}
										</button>
										<p className={styles.productButtonsText}>
											ще 1111 людей бажають
										</p>
									</div>
								</div>
								{/* <Spoler /> */}
							</div>
						</div>
					</Container>
				</section>
			) : (
				<p>Loading</p>
			)}
		</>
	)
}

export default ProductInfo
