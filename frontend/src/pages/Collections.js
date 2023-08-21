import { useLoaderData } from 'react-router-dom';
import CollectionList from '../components/CollectionsList';

function CollectionPage() {
const data = useLoaderData()
console.log(data)

  return (
      <CollectionList collections={data} />
  );
}

export default CollectionPage;