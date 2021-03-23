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

const PostBoxWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

`

const PostBox1 = styled.div`
  /* border:1px solid black; */
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:0rem 5rem;
  margin-top:8rem;
  h1{
    
    font-size:2rem;
  }
`

const PostBoxInner1 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:0rem 5rem;
    
  
`
const PostBoxInner2 = styled.div`
    display:flex;
    flex-direction:column;
    /* align-items:flex-start; */
    /* justify-content:center; */
    justify-self:start;
    padding:0rem 0.1rem;
  
`


const PostBox2 = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
  padding:1rem;
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
        layout="constrained"
        width={500}
      />
      
      {/* Photography post loop */}
      <PostBoxWrapper>
        <PostBox1>
          <h1>Photography</h1>
          <PostBoxInner1>
          {data.photography.edges.map(post => (
            <main>
              <h3>
              <LinkStyled to={post.node.frontmatter.slug}>{post.node.frontmatter.title}
              </LinkStyled>
              </h3>
              <p>{post.node.frontmatter.date}</p>
            </main>
        ))}
          </PostBoxInner1>
        </PostBox1>
            {/* Politics post loop */}
          
        <PostBox2>
          <h1>Politics</h1>
          <PostBoxInner2>
        {data.politics.edges.map(post => (
            <h3>
            <LinkStyled to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</LinkStyled>
            </h3>
        ))}
            </PostBoxInner2>
          </PostBox2>
      </PostBoxWrapper>
    </BlogPreview>
  </Layout>

  )
}


export default IndexPage
