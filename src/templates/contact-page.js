import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { navigate } from "gatsby-link";

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  
  return (
    <PageContent className="content" content={content} />
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  const encode = function (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "name": form.elements["name"].value,
        "email": form.elements["email"].value,
        "message": form.elements["message"].value
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Layout>
        <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
            <div className="panel">
                <p className="panel-heading">
                  Contact Us
                </p>
                <div className="panel-block">
                  <ContactPageTemplate
                    contentComponent={HTMLContent}
                    title={post.frontmatter.title}
                    content={post.html}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <form
                name="contact"
                method="post"
                action="/contact/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"} >Name</label>
                  <div className="control">
                    <input className="input" type={"text"} name={"name"} id={"name"} required={true} />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>Email</label>
                    <div className="control">
                      <input className="input" type={"email"} name={"email"} id={"email"} required={true} />
                    </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>Message</label>
                  <div className="control">
                    <textarea className="textarea" name={"message"} id={"message"} required={true} />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-primary" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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