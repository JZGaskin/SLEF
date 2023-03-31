import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import MFApp from '../components/SignUpForm/MFApp'
import { FormSection } from '../utils/form'

const SignupPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FormSection>
      <MFApp />
    </FormSection>
  </Layout>
)

export default SignupPage
