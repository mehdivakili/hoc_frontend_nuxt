export default function ({store, redirect, route}) {
  if (!route.path.startsWith('/register') && store.state.auth.loggedIn && !store.state.auth.user.is_purchased) {
    return redirect('/register')
  } else if (route.path.startsWith('/register') && !store.state.auth.loggedIn && store.state.register.state === 5)
    return redirect('/')
}
