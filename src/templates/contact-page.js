import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ContactPageTemplate = ({ address }) => {

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="panel">
              <p className="panel-heading">
                Address
              </p>
              <div className="panel-block">
                {address}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="panel">
              <p className="panel-heading">
                Phone
              </p>
              <div className="panel-block">
                {address}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="panel">
              <p className="panel-heading">
                Hours
              </p>
              <div className="panel-block">
                {address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  hours: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        address={frontmatter.title}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`