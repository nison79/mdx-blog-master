import React from 'react'
import Layout from '../components/layout'
import IconHome from '../components/IconHome'
import IconEmail from '../components/IconEmail'
import IconMobile from '../components/IconMobile'
import IconWorkPhone from '../components/IconWorkPhone'
import IconTwitter from '../components/IconTwitter'
import { Link , graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import SEO from "../components/seo"

const PageWrapper =styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  /* max-width:1020px; */
  font-family: 'Poppins';
  place-items:center;
  min-height:100vh;
  /* max-width:50%; */
  @media(max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows:400px 200px;
  }
  @media(min-width:1500px) {
    display:flex;
    justify-content:space-evenly;
  }
  h1 {
    font-weight:400;
    font-family:'Poppins';
    align-self:center;
  }
`

const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const InfoBox = styled.div`
  display:flex;
  flex-direction:column;
  padding:2rem 2rem;;
  border-bottom:1px solid black;
  p {
    margin:0;
  }
`

const InfoBoxInfo =styled.div`
  display:flex;
  align-items:center;
  padding:0.12rem 1rem;
  /* justify-content:center; */
  p {
    margin-left:24px;
  }
  a {
    text-decoration:none;
    color:black;
    transition: all 500ms ease;

    &:hover {
      color:violet;
      transform:scale(1.2);
      transform:translateX(15px);
    }
  }
  
`

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageWrapper>
          <StaticImage 
            src="../images/contact.svg"
            alt="contact-writing"
            layout="constrained"
            width={200}
            quality={100}
            transformOptions={{fit:"cover"}}
          />
        <Content>
          <InfoBox>
            <InfoBoxInfo>
                <IconHome/>
                <p>{data.site.siteMetadata.address}</p>
            </InfoBoxInfo>
            <InfoBoxInfo>
                <IconEmail/>
                <a href="mailto:georgenison@gmail.com" target="_blank" rel="noopener noreferrer ">
                  <p>{data.site.siteMetadata.email}</p>
                </a>
            </InfoBoxInfo>
            <InfoBoxInfo>
                <IconMobile/>
                <p>{data.site.siteMetadata.mobile}</p>
            </InfoBoxInfo>
            <InfoBoxInfo>
                <IconWorkPhone/>
                <p>{data.site.siteMetadata.work}</p>
            </InfoBoxInfo>
            <InfoBoxInfo>
              <IconTwitter/>
                  <a href="https://twitter.com/gnikoglou79" target="_blank" rel="noopener noreferrer "><p>{data.site.siteMetadata.twitter}</p></a>
                
                  
            </InfoBoxInfo>
          </InfoBox>
        </Content>
      </PageWrapper>
    </Layout>
  )
}

export default contact


export const query = graphql`
  query SiteMetadata {
  site {
    siteMetadata {
      author
      title
      description
      address
      twitter
      email
      work
      mobile
    }
  }
}
`