import { setupBlocs } from '@bloc-arch/react'
import { LedBloc } from './led'

export const { BlocProvider, useBloc, useWeakBloc } = setupBlocs({
  led0: (nextLedBloc: LedBloc) => new LedBloc(nextLedBloc),
  led1: (nextLedBloc: LedBloc) => new LedBloc(nextLedBloc),
  led2: () => new LedBloc(),
})
