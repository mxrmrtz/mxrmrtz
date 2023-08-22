import { useLoaderData, json } from "react-router-dom"
import CollectionItem from "../components/Collection"


const CollectionDetailPage = () => {
	const data = useLoaderData()
	return <CollectionItem collection={data}/>	
}

export default CollectionDetailPage

export async function loader({req, params}) {
		console.log(params)

	const id = params.collectionId;
	const response = await fetch("http://localhost:8080/collections/" + id);
	if (!response.ok) {
	  throw json({ message: "couldn't fetch details about collection" }, { status: 500 });
	} else {
	  return response.json(); // Return the JSON response
	}
  }