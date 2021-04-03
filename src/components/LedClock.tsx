import React from 'react'
import styled from 'styled-components'
import { LedEvents } from '../blocs/led'
import { useWeakBloc } from '../blocs/setup-blocs'

export function LedClock() {
  const ledBloc0Getter = useWeakBloc('led0')
  const ledBloc1Getter = useWeakBloc('led1')
  const ledBloc2Getter = useWeakBloc('led2')
  const ledBloc3Getter = useWeakBloc('led3')

  return (
    <Button
      onClick={() => {
        ;[
          ledBloc0Getter,
          ledBloc1Getter,
          ledBloc2Getter,
          ledBloc3Getter,
        ].forEach((ledBlocGetter) => {
          ledBlocGetter()?.dispatch(new LedEvents.TurnOff())
        })
      }}
    >
      RESET
    </Button>
  )
}

const Button = styled.div`
  border: 2px solid orange;
  color: orange;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
