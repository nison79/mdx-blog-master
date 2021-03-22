import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPreview = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:2rem;
  h1 , h3 {
    font-family:'Poppins';
    font-weight: 300;
    letter-spacing:-1px;
  }
`

const LinkStyled = styled(Link)`
  text-decoration:none;
  color:black;
`

const PostBox = styled.div`
  padding-top:5rem;
  display:flex;

`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq : "bwelli.jpg"}) {
        childImageSharp {
          gatsbyImageData( width:800  layout: CONSTRAINED , quality: 100  )
        }
      }
      allMdx {
        nodes{
          frontmatter{
            title 
            author
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <SEO title="Home" />
    
    <BlogPreview>
      <h1>Blog Posts</h1>
      {/* <GatsbyImage 
        tag="header"
        image={data.file.childImageSharp.gatsbyImageData}
        alt = " girl in the beach "
      /> */}
      {data.allMdx.nodes.map(post => (
        <PostBox>
          <h3>
          <LinkStyled to={post.frontmatter.slug}>{post.frontmatter.title}</LinkStyled>
          </h3>
        </PostBox>
      ))}
    </BlogPreview>
  </Layout>

  )
}


export default IndexPage
