import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { BannerButton, Banner } from '../utils'
import Hero from '../utils/hero'
import BillboardImg from '../components/billboard'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'

const IndexPage = props => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<StyledBackgroundSection />*/}
    <Hero>
      <BillboardImg fluid={props.data.desktop.childImageSharp.fluid} />
      <Banner title="SOMERSET" subtitle="Youth Football & Cheer">
        <Link to="/signup/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '1rem auto' }}>Sign Up</BannerButton>
        </Link>
      </Banner>
    </Hero>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "bcg/mightymite2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
