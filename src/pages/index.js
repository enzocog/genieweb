import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Product from "../components/sections/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Optimized Personal Finance. Powered by AI." />
    <Navigation />
    <Header />
    <Features />
    <GetStarted />
    <Product />
    <Footer />
  </Layout>
)

export default IndexPage
