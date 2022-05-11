export const state = () => ({
  userData: {},
  error: {},
  state: 0,
  vaccine: ''
})

export const mutations = {

  setUserData(state, data) {
    state.userData = {...state.userData, ...data}
  },
  setError(state, data) {
    state.error = data
  },
  setState(state, data) {
    state.state = data
  },
  setVaccine(state, data) {
    state.vaccine = data
  }
}
