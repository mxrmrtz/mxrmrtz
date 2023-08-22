import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import CollectionDetailPage, {
	loader as collectionDetailLoader,
} from "./pages/CollectionDetail";
import CollectionPage from "./pages/Collections";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import CollectionRootLayout from "./pages/CollectionRoot";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "collections",
					element: <CollectionRootLayout />,
					children: [
						{
							index: true,
							element: <CollectionPage />,
							loader: async () => {
								const response = await fetch("http://localhost:8080/collections");

								if (!response.ok) {
								} else {
									const resData = await response.json();
									return resData.collections;
								}
							},
						},
						{
							path: ":collectionId",
							element: <CollectionDetailPage />,
							loader: collectionDetailLoader,
						}, 
					],
				},
			
			],
		},
	]);
	return (
		<main className="main">
			{" "}
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
