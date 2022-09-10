import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import { Disclosure } from '@headlessui/react'

export default function NavShort() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Graham New Media Logo"
              width="100"
              height="100"
            />
          </Link>

          <a
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            onClick={() => setCartOpen(!cartOpen)}
          >
            Cart ({cartQuantity})
          </a>
          <MiniCart cart={cart} />
        </div>
      </div>
    </Disclosure>
  )
}
