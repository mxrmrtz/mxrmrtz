import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/carosuel.module.css";

const Carousel = ({ slides }) => {
	const [width, setWidth] = useState(0);
	const carosuelRef = useRef();

	useEffect(() => {
		setWidth(carosuelRef.current.scrollWidth - carosuelRef.current.offsetWidth);
	}, []);

	return (
		<motion.div ref={carosuelRef} className={styles.container}>
			<motion.div
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				className={styles.inner_carousel}
			>
				{slides.map((image) => {
					return (
						<motion.div key={image.id} className={styles.slide_item}>
							<img src={image.url} alt={image.title} />
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Carousel;
