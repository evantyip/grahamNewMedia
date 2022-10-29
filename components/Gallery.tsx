import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

interface Props {
  gallery: File[]
}

interface File {
  url: string
  title: string
}

const Gallery = ({ gallery }: Props) => {
  const [image, selectImage] = useState<File | null>(null)

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-gray-200 pt-6 sm:px-6 lg:px-8">
      {image && (
        <div>
          <button
            type="button"
            className="float-right mb-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => selectImage(null)}
          >
            Close
          </button>

          <Image
            src={image.url}
            alt={image.title}
            width={1280}
            height={720}
            priority
          />
        </div>
      )}
      {!image && (
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {gallery.map((file: File) => (
            <li key={file.url} className="relative">
              <div
                className="aspect-w-4 aspect-h-3 block w-full overflow-hidden"
                onClick={() => {
                  selectImage(file)
                }}
              >
                <Image
                  src={file.url}
                  alt={file.title}
                  className="pointer-events-none object-cover"
                  layout="fill"
                  priority
                />
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {file.title}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Gallery
