import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ContactPageTemplate = ({ name, address, city_state_zip, phone, alt_phone, hours }) => {
  console.log(address);
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
                {name}<br />
                {address}<br />
                {city_state_zip}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="panel">
              <p className="panel-heading">
                Phone
              </p>
              <div className="panel-block">
                {phone}<br />
                {alt_phone}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="panel">
              <p className="panel-heading">
                Hours
              </p>
              <div className="panel-block">
                {hours}
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
        name={frontmatter.name} 
        address={frontmatter.address}
        city_state_zip={frontmatter.city_state_zip}
        phone={frontmatter.phone}
        alt_phone={frontmatter.alt_phone}
        hours={frontmatter.hours}
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
        name,
        address,
        city_state_zip,
        phone,
        alt_phone,
        hours
      }
    }
  }
`