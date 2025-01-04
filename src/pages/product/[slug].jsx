import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

export default function ProductDetail({ product }) {
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="product-image">
        <Image src={urlFor(product.image).url()} alt={product.name} width={282} height={370} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-4">${product.price}</p>
        {product.description && (
          <p className="text-base text-red-600">{product.description}</p>
        )}
        <p className="text-base text-yellow-600">hello world</p>
      </div>
    </div>
  );
}

// Fetch data for the specific slug
export async function getStaticPaths() {
  const products = await client.fetch(`*[_type == "product"] { slug }`);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 10, // Optional, to revalidate after 10 seconds
  };
}
