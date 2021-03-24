import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPreview = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0.1rem;
  margin-bottom:2rem;
  min-height:100vh;
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
  /* text-align:left; */
  color:black;
`

const PostBoxWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap:2rem;

`

const PostBox1 = styled.div`
  /* border:1px solid black; */
  display:grid;
  grid-template-columns:1fr 1fr;
  margin-bottom:2.5rem;
  
  /* padding:0rem 5rem; */
  margin-top:4rem;
  h1{
    font-size:2rem;
    text-align:left;
  }
  .gatsby-image-wrapper{
    margin-left:10rem;
  }
`

const PostBoxInner1 = styled.div`
    flex-direction:column;
    justify-self:start;
    padding:0rem 0.1rem;
  
  
`
const TextDate = styled.div`
  padding-right:8rem;
  p{  
    font-size:12px;
    color:grey;
  }
`

const PostBoxInner2 = styled.div`
    display:flex;
    flex-direction:column;
    justify-self:start;
    padding:0rem 0.1rem;
  
`


const PostBox2 = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  /* padding:1rem; */
  h1{
    font-size:2rem;
  }
  .gatsby-image-wrapper{
    margin-left:10rem;
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
      {/* <StaticImage 
        src="../images/posts.svg"
        alt="post-design"
        layout="constrained"
        width={200}
      /> */}
      
      {/* Photography post loop */}
      <PostBoxWrapper>
        <PostBox1>
            <StaticImage 
            src="../images/CAMERA.svg"
            alt="post-design"
            layout="fixed"
            width={100}
          /> 
          <PostBoxInner1>
          {data.photography.edges.map(post => (
            <TextDate>
              <h3>
              <LinkStyled to={post.node.frontmatter.slug}>{post.node.frontmatter.title}
              </LinkStyled>
              </h3>
              <p>{post.node.frontmatter.date}</p>
            </TextDate>
        ))}
          </PostBoxInner1>
        </PostBox1>
            {/* Politics post loop */}
          
        <PostBox2>
          <StaticImage 
              src="../images/POLITICS.svg"
              alt="post-design"
              layout="fixed"
              width={100}
            /> 
          <PostBoxInner2>
        {data.politics.edges.map(post => (
          <TextDate>
              <h3>
              <LinkStyled to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</LinkStyled>
              </h3>
              <p>{post.node.frontmatter.date}</p>
          </TextDate>
        ))}
            </PostBoxInner2>
          </PostBox2>
      </PostBoxWrapper>
    </BlogPreview>
  </Layout>

  )
}


export default IndexPage
