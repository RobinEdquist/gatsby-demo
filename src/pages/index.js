import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import Landing from "../components/Landing/landing"
import About from "../components/About/about"
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase"
import Footer from "../components/Footer/footer"

import NorthernLights from "../images/assets/northern-lights.svg"
import Noise from "../images/assets/undraw_watch.svg"
import Beats from "../images/assets/beats.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="_-_-_" />
      <Landing />
      <About />
      <ProjectShowcase
        illustration={<NorthernLights />}
        flipped={false}
        title={"Interactive Northern Lights"}
        description={
          "An interactive installation presented at Universeum science centre designed and developed with the purpose and accomplished goal of introducing adolescences to invisible phenomena that exist in reality. A unique interactive controller based on the technology of the theremin was developed. This controller disguised as the earth in combination with our web app and props tie together the experience."
        }
        skills={["Arduino", "JS", "CSS", "HTML", "Electronics", "Design"]}
      />
      <ProjectShowcase
        illustration={<Noise />}
        flipped={true}
        title={"Watch the noise"}
        description={
          "An app for Wear OS designed and developed based on the research of prolonged noise. The watch passively listens for noise in the user's environment to make them aware of when the exposure reaches the threshold of health risks and the risk of decreased productivity."
        }
        skills={["Android", "Design", "Java"]}
      />
      <ProjectShowcase
        illustration={<Beats />}
        flipped={false}
        title={"Dis-connected-beats"}
        description={
          "This tangible user interface is an alternative approach to sequencers as a novel musical tool developed from the concept of creating a musical instrument that anyone could create music worth building upon in their first session."
        }
        skills={["Arduino", "Design"]}
      />
      <Footer />
    </Layout>
  )
}

export default IndexPage
