import styles from "../styles/collection.module.css";
import curves from "../images/curves.png";
const Collection = () => {
	return (
		<main className={styles.container}>
			<img src={curves} className={styles.img} />
			<div className={styles.collection_name}>
				<h2>curves</h2>
				<h3>
					Life is too <b>random</b> to be <b>straight</b>, so it’s okay to <b>curve</b>
				</h3>
				<button>Discover</button>
			</div>
		</main>
	);
};

export default Collection;
