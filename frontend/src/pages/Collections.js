import { useLoaderData } from 'react-router-dom';
import CollectionList from '../components/CollectionsList';

function CollectionPage() {
const data = useLoaderData()

  return (
      <CollectionList collections={data} />
  );
}

export default CollectionPage;