// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/carosuel.module.css";
// import required modules
import { Pagination } from "swiper/modules";

const Carousel = ({ slides }) => {
	return (
		<>
			<Swiper pagination={true} modules={[Pagination]} className={styles.container}>
				{slides.map((image) => (
					<SwiperSlide className={styles.swiper_slide} key={image.id}>
						<img id={image.id} src={image.url} alt={image.title} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Carousel;
