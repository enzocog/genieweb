import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Smart Money Management</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Recieve budget and spending alerts based on your favorite triggers.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Security</FeatureTitle>
          <FeatureText>
            Your data is always safe with us. We use end-to-end encryption and data anonmyization.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Recommendations</FeatureTitle>
          <FeatureText>
            Instantly recieve actionable recommendations you can perform right away.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Aggregation</FeatureTitle>
          <FeatureText>
            Easily link up to 5+ banks/credit-cards to your finance account.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Goals</FeatureTitle>
          <FeatureText>Insert your custom goals and recieve advice on how to reach them.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
            High interest and rewards for hitting your goals.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
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

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
