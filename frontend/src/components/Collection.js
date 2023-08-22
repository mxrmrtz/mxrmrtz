import styles from "../styles/collection.module.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const CollectionItem = ({ collection }) => {
	const data = collection.collection;
	return (
		<main className={styles.container}>
			<Link className={styles.btn} to={"/collections"}>
				Back
			</Link>
			{/* <img src={data.image} className={styles.img} alt={data.title} /> */}
			<div className={styles.carousel}>
				<Carousel slides={data.imageSlides} parentWidth={350} />
			</div>
			<div className={styles.collection_name}>
				<h2>{data.title}</h2>
				<h3>{data.headline}</h3>
			</div>
		</main>
	);
};

export default CollectionItem;
