import React from 'react'
import styled from 'styled-components'

export function Led(props: { isOn: boolean }) {
  return <Container isOn={props.isOn} />
}

const Container = styled.div<{ isOn: boolean }>`
  width: 2rem;
  height: 2rem;
  background: ${({ isOn }) =>
    isOn
      ? 'radial-gradient(rgba(150, 0, 0, 0.4), rgba(150, 0, 0, 0.8))'
      : 'radial-gradient(rgba(255, 128, 128, 1.0) 10%, rgba(255, 32, 32, 1.0) 75%)'};
  border-radius: 50%;
  margin: 0.5rem;
`
