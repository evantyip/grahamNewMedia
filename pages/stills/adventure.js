import React from 'react'
import { contentfulClient } from '../../utility/contentful'
import Gallery from '../../components/Gallery'

const adventure = ({ gallery }) => {
  return <Gallery gallery={gallery} />
}

export const getStaticProps = async () => {
  const content = await contentfulClient.getEntries({
    content_type: 'galleryPicture',
    'fields.type': 'Adventure',
  })
  const gallery = content.items.map((el) => {
    const picFields = el.fields.picture.fields
    return {
      title: el.fields.title,
      type: el.fields.type,
      url: picFields.file.url.replace('//', 'https://'),
    }
  })
  return {
    props: {
      gallery,
    },
    revalidate: 900,
  }
}
export default adventure
