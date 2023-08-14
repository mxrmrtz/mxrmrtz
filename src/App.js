import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Collection from "./components/Collection";
import CollectionList from "./components/CollectionsList";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
	return (
		<main className="main">
			<NavBar />
			<Router>
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/collections" element={<CollectionList />} />
					<Route path="/collections/:collectionId" element={<Collection />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
