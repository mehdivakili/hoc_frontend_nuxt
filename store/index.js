export const state = () => ({
  menu: [],
  footerColor: 'white',
  is_401: false
})

export const mutations = {

  setMenu(state, data) {
    state.menu = data
  },
  setFooterColor(state, data) {
    state.footerColor = data
  },
  is_401(state, data) {
    state.is_401 = data
  }
}
