import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product"] { "slug": slug.current }`);
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetail({ params }) {
  const { slug } = params;

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="product-image">
        {product.image ? (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={282}
            height={370}
            loading="lazy"
          />
        ) : (
          <div className="bg-gray-200 w-72 h-96 flex items-center justify-center">
            No Image Available
          </div>
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-4">${product.price}</p>
        {product.description && <p className="text-base text-red-600">{product.description}</p>}
      </div>
    </div>
  );
}
