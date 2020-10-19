const ADD_COUNT = 'ADD_COUNT'
const SUB_COUNT = 'SUB_COUNT'

export interface CountState {
  rCount: number
} 

export interface addCountAction {
  type: typeof ADD_COUNT
}

export interface subCountAction {
  type: typeof SUB_COUNT
}

export type CountTypes = addCountAction | subCountAction;

export const addCount = (): CountTypes => ({
  type: ADD_COUNT
});

export const subCount = (): CountTypes => ({
  type: SUB_COUNT
})

export const initState: CountState = {
  rCount: 1
}

export const opCount = (state: CountState = initState, action: CountTypes): CountState => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        rCount: state.rCount + 1
      }
    case SUB_COUNT:
      return {
        rCount: state.rCount - 1
      }
    default:
      return state
  }
}