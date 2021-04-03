import { BlocBuilder, useBlocRenderProp } from '@bloc-arch/react'
import React from 'react'
import styled from 'styled-components'
import { LedBloc, LedEvents, LedStates } from '../blocs/led'

export function Led(props: { ledBloc: LedBloc }) {
  return (
    <div
      onClick={() => {
        props.ledBloc.dispatch(new LedEvents.Toggle())
      }}
    >
      <BlocBuilder
        bloc={props.ledBloc}
        renderer={useBlocRenderProp(
          (state) => {
            if (state instanceof LedStates.On) {
              return (
                <>
                  <Container isOn={true} />
                  <Label>{props.ledBloc.label}</Label>
                </>
              )
            } else if (state instanceof LedStates.Off) {
              return (
                <>
                  <Container isOn={false} />
                  <Label>{props.ledBloc.label}</Label>
                </>
              )
            }
            return <Container isOn={false} />
          },
          [props.ledBloc]
        )}
      />
    </div>
  )
}

const Container = styled.div<{ isOn: boolean }>`
  width: 2rem;
  height: 2rem;
  background: ${({ isOn }) =>
    isOn
      ? 'radial-gradient(rgba(255, 128, 128, 1.0) 10%, rgba(255, 32, 32, 1.0) 75%)'
      : 'radial-gradient(rgba(64, 10, 10, 1.0), rgba(150, 0, 0, 0.75))'};
  border-radius: 50%;
  margin: 0.5rem;
  cursor: pointer;
`

const Label = styled.div`
  color: gray;
  font-weight: bold;
  text-align: center;
`
