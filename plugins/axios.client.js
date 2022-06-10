export default ({$axios, app, store}, inject) => {
  $axios.onError((error) => {
    if (!store.state.is_401 && error.response.status === 401) {
      store.commit('is_401', true)
      app.$auth.logout().then((res) => {
        window.location.reload()
      }).cache((res) => {
        window.location.reload()
      });
    }
    throw error
  })
}
