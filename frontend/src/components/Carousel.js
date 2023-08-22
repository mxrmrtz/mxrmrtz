import { useState } from "react";
import styles from "../styles/carosuel.module.css";

const Carousel = ({ slides, parentWidth }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	console.log(slides[currentIndex]);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideId) => {
		setCurrentIndex(slideId);
	};

	const getSlidesContainerStlyes = () => ({
		width : parentWidth * slides.length,
		transform: `translateX(${-(currentIndex * parentWidth)}px)`
	});

	const GetSlideStyleWithBackground = (slideId) => ({
		backgroundImage: `url(${slides[slideId].url})`, // Note the parentheses around url
		width: `${parentWidth}px`,
	  });
	return (
		<>
			<div className={styles.slider_container}>
				<div onClick={goToPrevious} className={styles.left_arrow}>
					←
				</div>
				<div onClick={goToNext} className={styles.right_arrow}>
					→
				</div>
				<div className={styles.slidesContainerOverFlow}>
				<div className={styles.slidesContainerTransition} style={getSlidesContainerStlyes()}>
					{slides.map((_, slidesId) => (
						<div
							key={slidesId}
							className={styles.image_slider}
							style={GetSlideStyleWithBackground(slidesId)}
						></div>
					))}
				</div>
				</div>
				<div className={styles.dot_container}>
					{slides.map((slide, slidesid) => (
						<span
							onClick={() => {
								goToSlide(slidesid);
							}}
							className={styles.dot_styles}
							key={slidesid}
						>
							*
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default Carousel;
