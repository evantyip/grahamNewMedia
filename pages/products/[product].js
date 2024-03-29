import ProductPageContent from '../../components/ProductPageContent'
import { getProduct, recursiveCatalog } from '../../utility/shopify'

export default function ProductPage({ product }) {
  // const realId = Buffer.from(product.id, 'base64').toString('utf8').split("/").pop()
  // console.log(realId)

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  )
}

export async function getStaticPaths() {
  const products = await recursiveCatalog()

  const paths = products.map((item) => {
    const product = String(item.node.handle)

    return {
      params: { product },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)

  return {
    props: {
      product,
    },
    revalidate: 900,
  }
}
