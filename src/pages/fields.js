import React from 'react'
import Layout from '../components/layout'
import { Section, Hero, Banner } from '../utils'
import FieldsBGI from '../components/FieldsBGI'

const Fields = () => {
  return (
    <Layout>
      <Hero>
        <FieldsBGI />
        <Banner title="Field Locations" />
        <br />
        <br />
        <br />
        <br />
      </Hero>
      <Section>
        <div>
          <h1 className="text-center">Field Locations</h1>
          <p>All K2 division games are played at Somerset stadium.</p>
          <h2>Somerset</h2>
          <p>
            645 S Columbia Ave., Somerset, PA 15501
            <br />
            <a href="https://goo.gl/maps/MuCZWz6ZBRE5FK2w6">MAP</a>
          </p>
          <br />
          <h2>Bishop McCort</h2>
          <p>
            100 Johns Street, Johnstown, PA 15901 - Point
            <br />
            <a href="https://goo.gl/maps/GGonazVRiFBz5hWP6">MAP</a>
          </p>
          <br />
          <h2>Central Cambria</h2>
          <p>
            999 9th St Colver, PA 15927
            <br />
            <a href="https://goo.gl/maps/FTXMRQJDoDGdu2Eq5">MAP</a>
          </p>
          <br />
          <h2>Forest Hills</h2>
          <p>
            Playground Drive Johnstown PA 15904
            <br />
            <a href="https://goo.gl/maps/HTpY1pxUhKe4mmvs8">MAP</a>
          </p>
          <br />
          <h2>Johnstown</h2>
          <p>
            222 Central Ave. Johnstown, PA 15902
            <br />
            <a href="https://goo.gl/maps/RB6Z3a5qgbxfCB3w9">MAP</a>
          </p>
          <br />
          <h2>Mainline</h2>
          <p>
            Memorial Drive Lilly, PA 15938
            <br />
            <a href="https://goo.gl/maps/PovV8dp5zthRDYa3A">MAP</a>
          </p>
          <br />
          <h2>Richland</h2>
          <p>
            1 Academic Ave. Johnstown, PA 15904
            <br />
            <a href="https://goo.gl/maps/LkGJ7uYrnB2NQHwk8">MAP</a>
          </p>
          <br />
          <h2>Westmont</h2>
          <p>
            827 Diamond Blvd. Johnstown, PA 15905
            <br />
            <a href="https://goo.gl/maps/Kj6ohoie3VbtErje9">MAP</a>
          </p>
          <br />
        </div>
      </Section>
    </Layout>
  )
}

export default Fields;