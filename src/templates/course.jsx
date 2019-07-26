import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        teacher
        tags
      }
      html
    }
  }
`

const course = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <h2>id = {post.id}</h2>
          <h2>{post.frontmatter.date}</h2>
          <h2>{post.frontmatter.teacher}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default course
