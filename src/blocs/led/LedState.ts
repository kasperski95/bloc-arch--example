import { BlocState } from '@bloc-arch/core'

export abstract class LedState extends BlocState {}

export class Off extends LedState {}

export class On extends LedState {}
