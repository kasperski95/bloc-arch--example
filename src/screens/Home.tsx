import React from 'react'
import styled from 'styled-components'
import { Led } from '../components/Led'

export function Home() {
  return (
    <Wrapper>
      <Title>Click on any diod</Title>
      <LedWrapper>
        <Led isOn={true} />
        <Led isOn={false} />
        <Led isOn={false} />
      </LedWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: white;
`

const LedWrapper = styled.div`
  display: flex;
`
