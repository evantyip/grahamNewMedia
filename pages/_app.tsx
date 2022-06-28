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
        <Component {...pageProps} />
      </ShopProvider>
    </div>
  )
}

export default MyApp
