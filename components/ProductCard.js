import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utility/currencyFormatter'

const ProductCard = ({ product }) => {
  const { handle, title } = product.node

  const { altText, originalSrc } = product.node.images.edges[0].node

  const minPrice = product.node.priceRange.minVariantPrice.amount
  const maxPrice = product.node.priceRange.maxVariantPrice.amount

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full overflow-hidden rounded-3xl bg-gray-200">
          <div className="relative h-72 group-hover:opacity-75">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">
          {minPrice == maxPrice
            ? formatter.format(minPrice)
            : `${formatter.format(minPrice)} - ${formatter.format(maxPrice)}`}
        </p>
      </a>
    </Link>
  )
}

export default ProductCard
