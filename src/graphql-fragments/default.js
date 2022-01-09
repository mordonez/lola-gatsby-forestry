import { graphql } from 'gatsby'

export const General = graphql`
  fragment MetaInfo on MarkdownRemarkFrontmatter {
    meta {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData(width: 1200, height: 600, quality: 85)
        }
      }
    }
  }
`