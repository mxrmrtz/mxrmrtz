import { Outlet } from "react-router-dom"

import CollectionNavigation from "./CollectionNavigation"


function CollectionRootLayout (){
	return(<>
		<CollectionNavigation/>
		<Outlet/>
	</>)
}

export default CollectionRootLayout