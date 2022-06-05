var is_401 = true;
export default ({$axios, app}, inject) => {
  $axios.onError((error) => {
    if (is_401 && error.response.status === 401) {
      app.$auth.logout().then((res) => {
        window.location.reload()
      }).cache((res) => {
        window.location.reload()
      });
      is_401 = false
    }
    throw error
  })
}
