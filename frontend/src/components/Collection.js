import styles from "../styles/collection.module.css";
import { Link, useParams } from "react-router-dom";


const CollectionItem = ({ collection}) => {
	const data = collection.collection
	return (
		<main className={styles.container}>
			<Link className={styles.btn} to={"/collections"}>Back</Link>
			<img src={data.image} className={styles.img} alt={data.title} />
			<div className={styles.collection_name}>
				<h2>{data.title}</h2>
				<h3>{data.headline}</h3>
			</div>
		</main>
	);
};

export default CollectionItem;
