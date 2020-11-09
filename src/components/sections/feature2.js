import React from "react"
import styled from "styled-components"
import feature2 from "../../images/product/feature2.png"

import { Section, Container } from "../global"

const Feature2 = () => (

  <Section id="Feature2">
  <StyledSection>
    
    <Flex>
    <FeatureImage src={feature2}/>
     <FeatureTextGroup>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
        <h1>Being a Student Just Got Better</h1>
        <h2>Genie offers current and recent students the first gratifying avenue to paying off their student loans.</h2>
     </FeatureTextGroup>
     </Flex>
     

    </StyledSection>
    
  </Section>
)

export default Feature2

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0% 10%, 100% 1%, 100% 100%, 0% 100%);
`

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

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const FeatureTextGroup = styled.div`
margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
    text-align: left;
  }

  h1 {
    margin: 0 0 20px;
    text-align: left;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const FeatureImage = styled.img`
max-width: 500px;
max-height: 450px;
text-align: center;
`