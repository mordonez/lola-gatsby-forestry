import { useStaticQuery, graphql } from 'gatsby'

export default function useMenu() {
  const { dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson {
          navigation {
            title
            url
          }
        }
      }
    `
  )
  return dataJson
}
