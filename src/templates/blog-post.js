import React from 'react'
import Layout from '../components/layout'
import { graphql ,Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const PageWrapper =styled.div`
  display:grid;
  grid-template-columns:1fr;
  /* max-width:1020px; */
  font-family: 'Poppins';
  @media(min-width:1500px) {
    display:flex;
    justify-content:center;
  }
`

const TitleAuthor = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  /* min-height:100vh; */
  padding:0rem 2rem;
  margin-right:5rem;
  margin-top:2rem;
  width:20rem;
  @media(min-width:1500px) {
      width:20rem;
      height:30rem;
      display:block;
      /* flex-direction:column; */
    }
  background-color:black;
    h1 , p  {
    margin-top:1rem;
    font-family: 'Poppins';
    color:white;
    }
`

const Text = styled.div`
  padding:3rem;
  max-width:60rem;
`

const LinkStyled = styled(Link)`
  text-decoration:none;
  color:black;
  margin-left:2rem;
`

export const data = graphql`
  query ($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
          title
          author
        }
        body
      }
    }
`

const BlogPost = ( { data }) => {

  return (
    <Layout>
      <PageWrapper>
        <TitleAuthor>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>by {data.mdx.frontmatter.author}</p>
        </TitleAuthor>
        <Text>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Text>
      </PageWrapper>
        <LinkStyled to='/'>&larr; Back to Home</LinkStyled>
    </Layout>
  )
}

export default BlogPost
