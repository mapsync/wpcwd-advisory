import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const SuccessPageTemplate = ({ title, map }) => {

  return (
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column">
            <PageContent className="content" content={content} />
          </div>
          <div class="column">
            <div className="content">
                <h1>Thank you!</h1>
                <p>This is a custom thank you page for form submissions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SuccessPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SuccessPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SuccessPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SuccessPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SuccessPage

export const successPageQuery = graphql`
  query SuccessPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
        map
      }
    }
  }
`
