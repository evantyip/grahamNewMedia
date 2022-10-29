import React from 'react'
import { contentfulClient } from '../../utility/contentful'
import Gallery from '../../components/Gallery'

const landscape = ({ gallery }) => {
  return <Gallery gallery={gallery} />
}

export const getStaticProps = async () => {
  const content = await contentfulClient.getEntries({
    content_type: 'galleryPicture',
    'fields.type': 'Landscape',
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
  }
}
export default landscape
