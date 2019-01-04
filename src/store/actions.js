import * as types from './mutation-type'
export const addNumber = function ({ commit }, { number }) {
  let num = number + 2
  console.log(num)
  commit(types.SET_NUMBER, num)
  commit(types.SET_PLAYING_STATE, true)
}

export const reduceNumber = function ({ commit }, { number }) {
  let num = number - 2
  commit(types.SET_NUMBER, num)
  commit(types.SET_PLAYING_STATE, false)
}
