import Collection from "./Collection";
import styles from "../styles/collectionList.module.css";

import { Link } from "react-router-dom";

function CollectionList({ collections }) {
	return (
		<>
			{collections.map((collection) => (
				<main key={collection.id} className={styles.container}>
					<Link className={styles.img_wrapper} to={collection.id}>
						<img src={collection.image} className={styles.img} alt={collection.title} />
					</Link>
					<div className={styles.collection_name}>
						<h2>{collection.title}</h2>
						<div>
							<h3>{collection.headline}</h3>
						</div>
					</div>
					<Link className={styles.btn} to={collection.id}>
						Discover
					</Link>
				</main>
			))}
		</>
	);
}

export default CollectionList;
