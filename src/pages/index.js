import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from "../components/layout"
import BackPaint from '../components/BackPaint'
import SEO from "../components/seo"

const BlogPreview = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:2rem;
  min-height:100vh;
  position:relative;
  h1  {
    font-family:'Poppins';
    font-weight: 400;
    letter-spacing:-1px;
  }
  h3 {font-family:'Poppins';
    font-weight: 300;
    letter-spacing:-1px;
  }

`

const LinkStyled = styled(Link)`
  text-decoration:none;
  color:black;
`

const PostBox1 = styled.div`
  /* border:1px solid black; */
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:3rem;
  h1{
    font-size:2rem;
  }
`

const PostBoxInner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0rem 3rem;
`


const PostBox2 = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:3rem;
  h1{
    font-size:2rem;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      politics: allMdx(filter: {frontmatter: {tags: {eq: "Politics"}}}) {
      edges {
        node {
          frontmatter {
            author
            title
            slug
            tags
            date(formatString: "Do MMM YYYY")
            excerpt
          }
        }
      }
    }
      photography: allMdx(filter: {frontmatter: {tags: {eq: "Photography"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  tags
                  slug
                  date(formatString: "Do MMM YYYY")
                  excerpt
          }
        }
      }
    }
    }
  `)

  return (
    <Layout>
    <SEO title="Home" />
    <BlogPreview>
      <StaticImage 
        src="../images/posts.svg"
        alt="post-design"
        width={200}
      />
      {/* Photography post loop */}
      <PostBox1>
        <h1>Photography</h1>
        <PostBoxInner>
        {data.photography.edges.map(post => (
          
            <h3>
            <LinkStyled to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</LinkStyled>
            </h3>
      ))}
        </PostBoxInner>
      </PostBox1>
          {/* Politics post loop */}
        
      <PostBox2>
        <h1>Politics</h1>
        <PostBoxInner>
      {data.politics.edges.map(post => (
          <h3>
          <LinkStyled to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</LinkStyled>
          </h3>
      ))}
          </PostBoxInner>
        </PostBox2>
    </BlogPreview>
  </Layout>

  )
}


export default IndexPage
