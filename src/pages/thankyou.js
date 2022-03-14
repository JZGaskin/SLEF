import React from 'react'
import Layout from '../components/layout'
import { Section } from '../utils'

export default Thankyou => {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />

      <Section>
        <div>
          <h2 className="text-center">Thank You!</h2>

          <h2>Now that you've signed up, here are some important things.</h2>
          <h4>You will receive an email about your transaction</h4>
          <br />
          <h2>Physicals</h2>
          <p>
            All football players will need the physical form completed by the
            first practice.
            <br />
            <a href="https://drive.google.com/open?id=1xM_LaYQ0UGx6HOIwWvgHuatbz2sdhkXn">
              Click Here
            </a>{' '}
            for a physical form.
          </p>
          <br />
          <h2>Contact and Communications</h2>
          <p>Your coach will reach out to you prior to the season.</p>
          {/*
          <h2>Text Groups</h2>
          <p>
            Stay up to date by joining your text group. Click on the groups
            below to join.
          </p>
          <ul>
            <li>
              <a href="https://groupme.com/join_group/58460534/olOOEzYx">
                6th Grade Football
              </a>{' '}
            </li>
            <li>
              <a href="https://groupme.com/join_group/58460942/z7ph6jnr">
                5th Grade Football
              </a>{' '}
            </li>
            <li>
              <a href="https://groupme.com/join_group/58461999/ec2bFLZa">
                4th Grade Football
              </a>{' '}
            </li>
            <li>
              <a href="https://groupme.com/join_group/58462067/Sw9H1Vu3">
                3rd Grade Football
              </a>{' '}
            </li>
            <li>
              <a href="https://groupme.com/join_group/58462289/xzBdMNeg">
                K2 Football
              </a>{' '}
            </li>
            <li>
              <a href="https://groupme.com/join_group/58462326/7wLlqTFV">
                Cheer
              </a>{' '}
            </li>
          </ul>*/}
        </div>
      </Section>
    </Layout>
  )
}
