import React from 'react'
import styled from 'styled-components'
import { useBloc } from '../blocs/setup-blocs'
import { Led } from '../components/Led'

export function Home() {
  const ledBloc2 = useBloc('led2')()
  const ledBloc1 = useBloc('led1')(ledBloc2)
  const ledBloc0 = useBloc('led0')(ledBloc1)

  return (
    <Wrapper>
      <Title>Click on any diod</Title>
      <LedWrapper>
        <Led ledBloc={ledBloc0} />
        <Led ledBloc={ledBloc1} />
        <Led ledBloc={ledBloc2} />
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
