import { Bloc } from '@bloc-arch/core'
import * as LedEvents from './LedEvent'
import * as LedStates from './LedState'

export class LedBloc extends Bloc<LedEvents.LedEvent, LedStates.LedState> {
  constructor(private label: String, private nextLedBloc?: LedBloc) {
    super(new LedStates.Off(label))
  }

  async *mapEventToState(event: LedEvents.LedEvent) {
    if (event instanceof LedEvents.Toggle) {
      if (this.getState() instanceof LedStates.Off) {
        yield new LedStates.On(this.label)
      } else {
        yield new LedStates.Off(this.label)
        await new Promise((resolve) => setTimeout(resolve, 100))
        this.nextLedBloc?.dispatch(new LedEvents.Toggle())
      }
    }
  }
}
