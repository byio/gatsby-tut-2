import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Blog index</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {
      data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path}><h3>{post.node.frontmatter.title}</h3></Link>
          <small>Posted on {post.node.frontmatter.date} by {post.node.frontmatter.author}</small>
        </div>
      ))
    }
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default IndexPage
