import React from 'react'
import styled from 'styled-components'
import { useBloc } from '../blocs/setup-blocs'
import { Led } from '../components/Led'
import { ResetButton } from '../components/ResetButton'

export function Home() {
  const ledBloc3 = useBloc('led3')()
  const ledBloc2 = useBloc('led2')(ledBloc3)
  const ledBloc1 = useBloc('led1')(ledBloc2)
  const ledBloc0 = useBloc('led0')(ledBloc1)

  return (
    <Wrapper>
      <Title>Click on any diod</Title>
      <LedWrapper>
        <Led ledBloc={ledBloc0} />
        <Led ledBloc={ledBloc1} />
        <Led ledBloc={ledBloc2} />
        <Led ledBloc={ledBloc3} />
      </LedWrapper>
      <LedWrapper>
        <Led ledBloc={ledBloc3} />
        <Led ledBloc={ledBloc2} />
        <Led ledBloc={ledBloc1} />
        <Led ledBloc={ledBloc0} />
      </LedWrapper>
      <ResetButton />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: black;
`

const LedWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
