import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(props.src)
  })
  if (!image) {
    return null
  }

  const imageFluid = image.node.childImageSharp.fluid

  return (
    <Img
      alt={props.alt}
      fluid={imageFluid}
      style={props.style}
      imgStyle={props.imgStyle}
    />
  )
}

export default Image
