import * as types from './mutation-type'

const matutations = {
  [types.SET_NUMBER] (state, number) {
    state.number = number
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  }
}

export default matutations
