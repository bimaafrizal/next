import { useRouter } from 'next/router';

const ShopPage = () => {

  const { query } = useRouter();
  console.log(query.slug);

  return (
    <div>
      <h1>Shop Page</h1>
      {query.slug && query.slug.length >= 2 ? (
        <p>Product: {`${query.slug[0]} - ${query.slug[1]}`}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShopPage;