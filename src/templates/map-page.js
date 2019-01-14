import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const MapPageTemplate = ({ title, map }) => {
  var url = map
  if (window)
    url = map + window.location.search
  return (
    <iframe title="map" src={url}></iframe>
  )
}

MapPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  query: PropTypes.string
}

const MapPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MapPageTemplate
        title={frontmatter.title}
        map={frontmatter.map}
      />
    </Layout>
  )
}

MapPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MapPage

export const mapPageQuery = graphql`
  query MapPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
        map
      }
    }
  }
`
