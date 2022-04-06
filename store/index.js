export const state = () => ({
  menu: [],
  footerColor: 'white'
})

export const mutations = {

  setMenu(state, data) {
    state.menu = data
  },
  setFooterColor(state, data) {
    state.footerColor = data
  }
}
