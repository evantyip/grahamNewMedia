import React from 'react'
import { contentfulClient } from '../../utility/contentful'

const projects = ({ projects }) => {
  // TODO Refactor to tsx
  console.log(projects)
  return (
    <div className="flex content-center justify-center">
      <div className="m-auto">
        <p className="my-10 text-center text-7xl">Films</p>
        {projects.map((proj) => {
          return (
            <iframe
              className="my-5"
              width={1280}
              height={720}
              src={proj.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const content = await contentfulClient.getEntries({
    content_type: 'projectVideoLink',
  })
  const projects = content.items.map((el) => {
    const vidFields = el.fields
    return {
      link: vidFields.link,
    }
  })
  return {
    props: {
      projects,
    },
    revalidate: 3600,
  }
}
export default projects
