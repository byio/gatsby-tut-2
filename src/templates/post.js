import React from 'react';
import Helmet from 'react-helmet';

export default function Template ({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <br />
      <small>Posted by {post.frontmatter.author} on {post.frontmatter.date}.</small>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath ($path: String!) {
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        author
      }
    }
  }
`;
