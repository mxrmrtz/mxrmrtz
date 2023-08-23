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
			<div className={styles.collection_name}>
				<h2>{data.title}</h2>
				<h3>{data.headline}</h3>
			</div>
			{/* <img src={data.image} className={styles.img} alt={data.title} /> */}
			<div className={styles.carousel}>
				<Carousel slides={data.imageSlides} />
			</div>
			<article className={styles.collection_name}>
				<p>{data.description}</p>
			</article>
			
		</main>
	);
};

export default CollectionItem;
