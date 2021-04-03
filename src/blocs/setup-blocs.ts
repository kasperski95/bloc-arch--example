import { setupBlocs } from '@bloc-arch/react'
import { LedBloc } from './led'

export const { BlocProvider, useBloc, useWeakBloc } = setupBlocs({
  led0: (nextLedBloc: LedBloc) => new LedBloc('0', nextLedBloc),
  led1: (nextLedBloc: LedBloc) => new LedBloc('1', nextLedBloc),
  led2: (nextLedBloc: LedBloc) => new LedBloc('2', nextLedBloc),
  led3: () => new LedBloc('3'),
})
