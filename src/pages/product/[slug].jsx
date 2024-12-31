import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

export default function ProductDetail({ product }) {
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image src={urlFor(product.image).url()} alt={product.name} width={500} height={500} />
      <p className="text-lg mt-2">${product.price}</p>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p> hello world </p>
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
