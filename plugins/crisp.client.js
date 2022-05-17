export default ($auth) => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "2db726fc-48bd-4e0b-b38d-b13d0c250418";

  (function () {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
    if ($auth.loggedIn) {
      window.$crisp.push(["set", "user:nickname", [$auth.user.first_name_persian + " " + $auth.user.last_name_persian]]);
      window.$crisp.push(["set", "user:email", [$auth.user.email]]);
    }
  })();
};
