import { BlocEvent } from '@bloc-arch/core'

export abstract class LedEvent extends BlocEvent {}

export class Toggle extends BlocEvent {}

export class TurnOff extends BlocEvent {}
