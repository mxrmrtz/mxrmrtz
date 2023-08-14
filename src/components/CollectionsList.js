import Collection from "./Collection";
import collections from "../Data.json";
import styles from "../styles/collectionList.module.css";

import { Link } from "react-router-dom";

function CollectionList() {
	return (
		<>
			{collections.collection.map((collection) => (
				<div className={styles.container} key={collection.id}>
					<Collection
						id={collection.id} // Pass the id as a prop
						name={collection.name}
						headline={collection.headline}
						info={collection.info}
						image={collection.image}
					/>
					<Link className={styles.btn} to={`/collections/${collection.id}`}>
						Discover
					</Link>
				</div>
			))}
		</>
	);
}

export default CollectionList;
