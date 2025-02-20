import { useRouter } from 'next/router';

const DetailProductPage = () => {
  // const router = useRouter();
  // const { slug} = router.query;

  const { query } = useRouter();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product: {query.slug}</p>
      {/* <p>Product: {slug}</p> */}
    </div>
  );
};

export default DetailProductPage;