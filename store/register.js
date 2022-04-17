export const state = () => ({
  userData: {},
  error: {}
})

export const mutations = {

  setUserData(state, data) {
    state.userData = {...state.userData, ...data}
  },
  setError(state, data) {
    state.error = data
  }
}
