import Link from 'next/link'

const Home = () => {
  return (
    <div className="grid h-screen grid-cols-3 content-center gap-4 bg-landing-page bg-auto bg-center">
      <Link href="/portfolio">
        <a className="rounded-md px-4 py-2 text-center font-serif text-7xl text-black hover:ring-2 hover:ring-gray-500">
          Portfolio
        </a>
      </Link>
      <Link href="/prints">
        <a className="rounded-md px-4 py-2 text-center font-serif text-7xl text-black hover:ring-2 hover:ring-gray-500">
          Shop
        </a>
      </Link>
      <Link href="/contact">
        <a className="rounded-md px-4 py-2 text-center font-serif text-7xl text-black hover:ring-2 hover:ring-gray-500">
          About
        </a>
      </Link>
    </div>
  )
}

export default Home
