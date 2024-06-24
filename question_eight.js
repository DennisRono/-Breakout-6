let user = {
  isAdmin: true,
  subscribed: false,
}

if (user.isAdmin || user.subscribed) {
  console.log('Access granted')
} else {
  console.log('Access Denied!')
}
