'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
  // $('#signup-modal').modal('hide')
  // $('#signup-error').hide()
  // $('.signout-menu-item').hide()
  // $('.changepassword-menu-item').hide()
  // $('.signup-menu-item').hide()
  // $('.signin-menu-item').show()
  // $('#signin-modal').modal('show')
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
  // $('#signup-error').show()
}

const signInSuccess = (data) => {
  store.user = data.user
  // pageEvents.onGetPages()
  // console.log('sign in ran and data is ', data)
  // $('#signin-modal').modal('hide')
  // $('#signin-error').hide()
  // $('#landing-page-content').hide()
  // $('#dashboard, .dash-container').show()
  // blogpostEvents.onGetBlogpost()
  // $('.signout-menu-item').show()
  // $('.change-password-menu-item').show()
  // $('.page-content').show()
  // $('.signup-menu-item').hide()
  // $('.signin-menu-item').hide()
  // $('#footerid').hide()
}

const signInFailure = (error) => {
  console.error('sign in failed and the error is ', error)
}

const changePasswordSuccess = (data) => {
  console.log('change password ran and data is ', data)
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
}

const signOutSuccess = (data) => {
  store.user = null
  console.log('sign in ran and data is ', data)

}

const signOutFailure = (error) => {
  console.error('sign out failed and the error is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
