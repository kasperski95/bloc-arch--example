import { BlocState } from '@bloc-arch/core'

export abstract class LedState extends BlocState {
  constructor(public label: String) {
    super()
  }
}

export class Off extends LedState {}

export class On extends LedState {}
