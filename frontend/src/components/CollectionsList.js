import Collection from "./Collection";
import styles from "../styles/collectionList.module.css";

import { Link, NavLink } from "react-router-dom";

function CollectionList({ collections }) {
	return (
		<>
			{collections.map((collection) => (
				<main className={styles.container}>
					<img src={collection.image} className={styles.img} alt={collection.title} />
					<div className={styles.collection_name}>
						<h2>{collection.title}</h2>
						<h3>{collection.headline}</h3>
					</div>
					<Link className={styles.btn} to={`/collections/${collection.id}`}>
						Discover
					</Link>
				</main>
			))}
		</>
	);
}

export default CollectionList;

