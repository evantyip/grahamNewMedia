import Link from 'next/link'
import { useContext, useState, Fragment } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Projects', href: '/projects', current: true },
  { name: 'Gallery', href: '/gallery', current: true },
  { name: 'Prints', href: '/prints', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

export default function Nav() {
  const { cart, cartOpen, setCartOpen, currentTab, storeCurrentTab } =
    useContext(CartContext)

  let cartQuantity = 0
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-center">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  Graham New Media
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        currentTab == item.name
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => {
                        storeCurrentTab(item.name)
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    onClick={() => setCartOpen(!cartOpen)}
                  >
                    Cart ({cartQuantity})
                  </a>
                  <MiniCart cart={cart} />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
