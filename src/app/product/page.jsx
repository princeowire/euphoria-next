import { Phooter } from '@/components/footer';
import { Nav } from '@/components/nav';
import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductPage() {
  let products = [];
  try {
    products = await client.fetch(`
      *[_type == "product"] {
        name,
        slug,
        price,
        description,
        image
      }
    `);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (!products || products.length === 0) {
    return <div className='w-full m-auto flex items-center justify-center'>No products available!</div>;
  }

  return (
    <div>

      <div className="px-8 py-4 gap-6 flex items-center justify-center flex-wrap">

      {products.map((product) => (
        <Link key={product.slug.current} href={`/product/${product.slug.current}`} passHref>
          <div className="flex flex-col gap-2 max-sm:w-96 cursor-pointer">
            <Image src={urlFor(product.image).url()} alt={product.name} width={282} height={370} />
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-1xl font-bold truncate max-w-48'>{product.name}</p>
                <p className='text-off-gray'>{product.description}</p>
              </div>
              <p className='bg-off-white px-3 py-1 rounded-lg'>${product.price}</p>
            </div>
          </div>
        </Link>
      ))}

      </div>
    </div>
  );
}
