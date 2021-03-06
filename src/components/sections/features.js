import React from "react"
import styled from "styled-components"
import features from "../../images/product/features.png"

import { Section, Container } from "../global"

const Features = () => (

  <Section id="features">
    <StyledContainer>
    <Flex>
     <FeatureTextGroup>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
        <h1>Tackle Student Loans Like A Pro</h1>
        <h2>Genie's roundup engine intelligently puts extra change from purchases towards student debt, shrinking loans gradually.</h2>
     </FeatureTextGroup>
            <FeatureImage src={features}/>
            <br />
     </Flex>
    </StyledContainer>
  </Section>
)

export default Features

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
  }

  h1 {
    margin: 0 0 24px;
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