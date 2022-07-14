export default ({$auth},inject) => {
  !function () {
    function t() {
      var t = document.createElement("script");
      t.type = "text/javascript", t.async = !0, localStorage.getItem("rayToken") ? t.src = "https://app.raychat.io/scripts/js/" + o + "?rid=" + localStorage.getItem("rayToken") + "&href=" + window.location.href : t.src = "https://app.raychat.io/scripts/js/" + o + "?href=" + window.location.href;
      var e = document.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(t, e)
    }

    var e = document, a = window, o = "7a8d4f7f-a9e1-491a-aa63-0f932c172049";
    "complete" == e.readyState ? t() : a.attachEvent ? a.attachEvent("onload", t) : a.addEventListener("load", t, !1)
  }();
  window.addEventListener('raychat_ready', function (ets) {
    window.Raychat.on('open', function (s) {
      if ($auth.loggedIn) {
        let user = $auth.user
        window.Raychat.setUser({
          email: user.email,
          name: user.first_name_persian + " " + user.last_name_persian,
          phone: user.phone_number,
          updateOnce: false
        });
      }
    });


  });
};
