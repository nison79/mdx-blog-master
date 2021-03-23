import React from 'react'
import Layout from '../components/layout'
import IconHome from '../components/IconHome'
import IconEmail from '../components/IconEmail'
import IconMobile from '../components/IconMobile'
import IconWorkPhone from '../components/IconWorkPhone'
import IconTwitter from '../components/IconTwitter'
import { Link , graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from "../components/seo"

const PageWrapper =styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  /* max-width:1020px; */
  font-family: 'Poppins';
  place-items:center;
  min-height:100vh;
  @media(max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows:200px 500px;
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
    margin-left:8px;
  }
`

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageWrapper>
          <h1>Contact</h1>
        <Content>
          <InfoBox>
            <InfoBoxInfo>
                <IconHome/>
                <p>{data.site.siteMetadata.address}</p>
            </InfoBoxInfo>
            <InfoBoxInfo>
                <IconEmail/>
                <p>{data.site.siteMetadata.email}</p>
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
                <p>{data.site.siteMetadata.twitter}</p>
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