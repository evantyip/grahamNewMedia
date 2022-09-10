import React from 'react'
import { contentfulClient } from '../../utility/contentful'

const gallery = ({ gallery }) => {
  console.log(gallery)
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {gallery.map((file) => (
        <li key={file.url} className="relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.url}
              alt={file.title}
              className="pointer-events-none object-cover"
            />
            {/* <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button> */}
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p> */}
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps = async (context) => {
  const content = await contentfulClient.getEntries({
    content_type: 'galleryPicture',
  })
  const gallery = content.items.map((el) => {
    const picFields = el.fields.picture.fields
    return {
      title: picFields.title,
      description: picFields.description,
      file: picFields.file,
      url: picFields.file.url.replace('//', 'https://'),
    }
  })
  return {
    props: {
      gallery,
    },
    revalidate: 10,
  }
}
export default gallery
