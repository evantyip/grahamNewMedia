import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import ShopProvider from '../context/shopContext'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-full">
      <ShopProvider>
        <Nav />
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <Component {...pageProps} />
        </div>
      </ShopProvider>
    </div>
  )
}

export default MyApp
