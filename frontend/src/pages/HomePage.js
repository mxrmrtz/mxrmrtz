import { NavLink } from "react-router-dom";

import styles from "../styles/homepage.module.css"


function HomePage() {
	return (
		<>
			<main className={styles.container}>
				<article className={styles.article}>
					<h2> So welcome to this placeholder text!</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<NavLink to={"/collections"}>Discover the collections</NavLink>
				</article>
			</main>
		</>
	);
}

export default HomePage;
