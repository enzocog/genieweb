import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Product from "../components/sections/about"
import Feature2 from "../components/sections/feature2"
import Feature3 from "../components/sections/feature3"

const IndexPage = () => (
  <Layout>
    <SEO title="Genie." />
    <Navigation />
    <Header />
    <Features />
    <Feature2 />
    <Feature3 />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
