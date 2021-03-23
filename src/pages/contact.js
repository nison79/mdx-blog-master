import React from 'react'
import Layout from '../components/layout'
import { Link , graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const PageWrapper =styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  /* max-width:1020px; */
  font-family: 'Poppins';
  place-items:center;
  @media(min-width:1500px) {
    display:flex;
    justify-content:space-evenly;
  }
  h1 {
    padding-left:2rem;
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
  padding:2rem;
  border-bottom:1px solid black;
`

const contact = ({ data }) => {
  return (
    <Layout>
      <PageWrapper>
          <h1>Contact</h1>
        <Content>
          <InfoBox>
            <p>{data.site.siteMetadata.address}</p>
            <p>{data.site.siteMetadata.email}</p>
            <p>{data.site.siteMetadata.mobile}</p>
            <p>{data.site.siteMetadata.work}</p>
            <p>{data.site.siteMetadata.twitter}</p>
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