import styles from "../styles/collection.module.css";
import curves from "../images/curves.png";
const Collection = ({ name, headline, image, id }) => {
	return (
		<main className={styles.container}>
			<img src={image} className={styles.img} alt={name} />
			<div className={styles.collection_name}>
				<h2>{name}</h2>
				<h3>{headline}</h3>
				<button>Discover</button>
			</div>
		</main>
	);
};

export default Collection;
