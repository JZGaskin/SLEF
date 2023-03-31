import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Section, Hero, Banner } from '../utils';
import ContactBGI from '../components/ContactBGI';

const ContactPage = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Hero>
        <ContactBGI />
        <Banner title="CONTACT US" subtitle="Youth Football & Cheer" />
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

export default ContactPage;

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
