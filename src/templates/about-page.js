import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Section, Hero, Banner } from '../utils';
import AboutBGI from '../components/AboutBGI';

const AboutPage = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Hero>
        <AboutBGI />
        <Banner title="ABOUT US" subtitle="Youth Football & Cheer" />
      </Hero>
      <Section>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
