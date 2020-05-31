import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import { Section, Container } from "../global"

const Product = () => {
  const data = useStaticQuery(graphql`
  query {
    file(sourceInstanceName: {eq: "product" }, name: {eq: "IMG_5274"}) {
      childImageSharp{
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  const query = useStaticQuery(graphql`
  query {
    file(sourceInstanceName: {eq: "product"}, name: {eq: "IMG_5275"}) {
      childImageSharp{
        fluid(maxWidth: 1000) {
          ...GatsbyImagesharpFluid
        }
      }
    }
  }
  `)

return(
    <Section id="Product">
  
    <StyledContainer>
    <Subtitle>Features</Subtitle>
    <SectionTitle>Smart Money Management</SectionTitle>
    <ImageWrapper>
        <StyledImage fluid={data.file.childImageSharp.fluid}/>
        <StyledImage fluid={data.file.childImageSharp.fluid}/>
      
    </ImageWrapper>
    </StyledContainer>
    
    </Section>
)
}

export default Product


const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

