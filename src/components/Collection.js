import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/collection.module.css";
import collections from "../Data.json";
import Carousel from "./Carousel";

const Collection = ({ id }) => {
	const params = useParams();

	// Check if id is passed as a prop, otherwise use the id from the URL parameter
	const collectionId = id !== undefined ? id : parseInt(params.collectionId);

	const collection = collections.collection.find((c) => c.id === collectionId);

	if (!collection) {
		return <div>Collection not found.</div>;
	}

	return (
		<>
			<main className={styles.container}>
				{id === undefined ? (
					<Link className={styles.btn} to={`/collections`}>
						Back
					</Link>
				) : null}

				<a className={styles.a} href={`/collections/${collection.id}`}>
					<img src={collection.image} className={styles.img} alt={collection.name} />
				</a>
				<div className={styles.collection_name}>
					<h2>{collection.name}</h2>
					<h3>{collection.headline}</h3>
				</div>
			</main>
		</>
	);
};

export default Collection;
