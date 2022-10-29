import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className="container m-auto flex flex-col">
      <div className="flex flex-row justify-center py-8">
        <p className="text-7xl">Stills</p>
      </div>
      <div className="my-10 flex flex-row justify-evenly">
        <Link href="/stills/landscape">
          <div className="Image relative my-auto ">
            <Image
              className="absolute"
              src="/stills/stillsLandscape.jpg"
              alt="Films picture"
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl text-white hover:cursor-pointer">
              Landscape
            </p>
          </div>
        </Link>

        <Link href="/stills/music">
          <div className="Image relative my-auto">
            <Image
              className="absolute"
              src="/stills/stillsMusic.jpg"
              alt="Stills picture"
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl text-white hover:cursor-pointer">
              Music
            </p>
          </div>
        </Link>
      </div>

      <div className="my-10 flex flex-row justify-evenly">
        <Link href="stills/adventure">
          <div className="Image relative my-auto ">
            <Image
              className="absolute"
              src="/stills/stillsAdventure.jpg"
              alt="Films picture"
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl  hover:cursor-pointer">
              Adventure
            </p>
          </div>
        </Link>

        <Link href="/stills/commercial">
          <div className="Image relative my-auto">
            <Image
              className="absolute"
              src="/stills/stillsCommercial.jpg"
              alt="Stills picture"
              width="512"
              height="384"
            />
            <p className="absolute inset-0 z-10 flex items-center justify-center font-serif text-6xl text-white hover:cursor-pointer">
              Commercial
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Index
