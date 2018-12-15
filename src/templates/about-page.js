import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, map }) => {

  return (
    <iframe src={map}></iframe>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        map={post.frontmatter.map}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        map
      }
    }
  }
`
