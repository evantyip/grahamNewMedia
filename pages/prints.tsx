import ProductCard from '../components/ProductCard'
import { getProductsInCollection } from '../utility/shopify'

interface props {
  products: product[]
}

interface product {
  node: {
    id: string
    title: string
    handle: string
    priceRange: {
      minVariantPrice: string
    }
    images: {
      edges: productImages[]
    }
  }
}

interface productImages {
  node: {
    originalSrc: string
    altText: string | null
  }
}

const Prints = ({ products }: props) => {
  return (
    <div>
      {/* <Nav /> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Prints</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product: product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prints

export async function getStaticProps() {
  const products: product[] = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
    revalidate: 3600,
  }
}
