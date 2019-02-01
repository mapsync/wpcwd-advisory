import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    var posts = [];
    if (data.allMarkdownRemark)
      posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {posts
              .map(({ node: post }) => (
                <div className="panel" key={post.id}>
                  <p className="panel-heading">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &nbsp;&bull;&nbsp; </span>
                    {post.frontmatter.date}
                  </p>
                  <div className="panel-block">
                    <p className="blog-desc">
                    {post.frontmatter.description}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, draft: { ne: true } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            draft
          }
        }
      }
    }
  }
`
