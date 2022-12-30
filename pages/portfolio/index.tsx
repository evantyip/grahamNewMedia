import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className="container m-auto flex flex-col">
      <div className="flex flex-row justify-center py-8">
        <p className="text-7xl ">Portfolio</p>
      </div>
      <div className="my-10 flex flex-row justify-evenly">
        <Link href="/portfolio/films">
          <div className="Image relative my-auto ">
            <Image
              className="absolute"
              src="/portfolio/portfolioFilms.jpg"
              alt="Films picture"
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl text-white hover:cursor-pointer">
              Films
            </p>
          </div>
        </Link>

        <Link href="/portfolio/stills">
          <div className="Image relative my-auto">
            <Image
              className="absolute"
              src="/portfolio/portfolioStills.jpg"
              alt="Stills picture"
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl text-white hover:cursor-pointer">
              Stills
            </p>
          </div>
        </Link>
      </div>
      <div className="my-10 flex flex-row justify-center">
        <Link href="/portfolio/graphics">
          <div className="Image relative mx-auto">
            <Image
              className="absolute"
              src="/portfolio/portfolioGraphics.jpg"
              alt="Graphics picture "
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl text-white hover:cursor-pointer">
              Graphics
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Index
