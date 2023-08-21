import { useLoaderData, json } from "react-router-dom"
import CollectionItem from "../components/Collection"


const CollectionDetailPage = () => {
	const data = useLoaderData()
	return <CollectionItem collection={data}/>	
}

export default CollectionDetailPage

export async function loader(req,params){
	const id = params.eventsId
	const response = await fetch("http://localhost:8080/events" + id)
	if(!response.ok){
		throw json({message: "couldnt fetch details about collection"},{status: 500})
	}else{
		return response
	}
}