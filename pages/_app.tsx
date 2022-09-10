import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import ShopProvider from '../context/shopContext'
import NavShort from '../components/NavShort'
import NavLong from '../components/NavLong'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="min-h-full">
      <ShopProvider>
        {router.pathname == '/' ? <NavShort /> : <NavLong />}
        <Component {...pageProps} />
      </ShopProvider>
    </div>
  )
}

export default MyApp
