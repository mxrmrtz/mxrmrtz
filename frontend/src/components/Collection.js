import styles from "../styles/collection.module.css";
import { useParams } from "react-router-dom";


const CollectionItem = ({ name, headline, image, id }) => {
	const params = useParams()


	console.log(params)
	return (
		<main className={styles.container}>
			<h1>{params.collectionId}</h1>
			<img src={image} className={styles.img} alt={name} />
			<div className={styles.collection_name}>
				<h2>{name}</h2>
				<h3>{headline}</h3>
			</div>
		</main>
	);
};

export default CollectionItem;
