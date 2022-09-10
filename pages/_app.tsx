import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import ShopProvider from '../context/shopContext'
import NavShort from '../components/NavShort'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-full">
      <ShopProvider>
        <NavShort />
        <Component {...pageProps} />
      </ShopProvider>
    </div>
  )
}

export default MyApp
