import styles from "../styles/navbar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" end>mxrmrtz</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
