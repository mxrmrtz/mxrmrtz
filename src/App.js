import NavBar from "./components/NavBar";
import collections from "./Data.json";

import "./App.css";
import Collection from "./components/Collection";

function App() {
	return (
	    <main className="main">
      <NavBar />
      {collections.collection.map((collection) => (
        <Collection
          key={collection.id}
          name={collection.name}
          headline={collection.headline}
          info={collection.info}
          image={collection.image} // Just pass the image path
        />
      ))}
    </main>
	);
}

export default App;
