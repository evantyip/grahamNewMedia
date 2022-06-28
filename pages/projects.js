import React from 'react'
import { contentfulClient } from '../utility/contentful'

const projects = ({ projects }) => {
  console.log(projects)
  return (
    <div>
      <h1>projects page</h1>
      {projects.map((proj) => {
        return <iframe width={1280} height={720} src={proj.link} />
      })}
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
    revalidate: 60,
  }
}
export default projects
