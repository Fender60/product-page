import { useState } from 'react';
import PropTypes from 'prop-types';
import IconClose from "../../../public/images/icon-close.svg?component";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SliderFull.scss';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderFull({onClose}) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="slider-full">
			<button className='slider-full__close' onClick={onClose}><IconClose className='slider-full__close--icon'/></button>
			<Swiper
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySlider2"
			>
				<SwiperSlide>
					<img src="./images/image-product-1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./images/image-product-2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./images/image-product-3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./images/image-product-4.jpg" />
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={20}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySlider"
			>
				<SwiperSlide>
					<img src="./images/image-product-1-thumbnail.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./images/image-product-2-thumbnail.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./images/image-product-3-thumbnail.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./images/image-product-4-thumbnail.jpg" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

SliderFull.propTypes = {
	onClose: PropTypes.func.isRequired,
};
