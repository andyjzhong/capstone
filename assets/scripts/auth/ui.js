'use strict'

require('../index')
const store = require('../store')
const courseEvents = require('../courses/events.js')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
  $('.register-success').show()
  $('.banner-out, .banner-fail, .banner-in, .register-fail, .change-success, .change-fail').hide()
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
  $('.register-fail').show()
  $('.banner-out, .banner-fail, .banner-in, .change-success, .change-fail, register-success').hide()
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign in ran and data is ', data)
  courseEvents.rerunIndex()
  $('.giant-container, .footer, #sign-out, #changepassword-form').show()
  $('#sign-in-form, #sign-up-form, #invalid-credits').hide()
  $('.banner-in').show()
  $('.banner-out, .banner-fail, .register-fail, .change-success, .change-fail, register-success').hide()
}

const signInFailure = (error) => {
  console.error('sign in failed and the error is ', error)
  $('.banner-fail').show()
  $('.banner-out, .banner-in, .register-fail, .change-success, .change-fail, register-success').hide()
}

const changePasswordSuccess = (data) => {
  console.log('change password ran and data is ', data)
  $('.change-success').show()
  $('.banner-out, .banner-fail, .banner-in, .register-fail, .change-fail, register-success').hide()
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
  $('.change-fail').show()
  $('.banner-out, .banner-fail, .banner-in, .register-fail, .change-success, register-success').hide()
}

const signOutSuccess = () => {
  store.user = null
  $('.banner-out').show()
  $('.banner-fail, .banner-in, .register-fail, .change-success, .change-fail, register-success').hide()
}

const signOutFailure = (error) => {
  console.error(error)
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
