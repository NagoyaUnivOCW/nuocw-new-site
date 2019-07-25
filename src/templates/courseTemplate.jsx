import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        teacher
      }
    }
  }
`

const courseTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>id = {id}</h2>
          <h2>{frontmatter.date}</h2>
          <h2>{frontmatter.teacher}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default courseTemplate
