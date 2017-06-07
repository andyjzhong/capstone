'use strict'

require('../index')
const store = require('../store')
const courseEvents = require('../courses/events.js')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign in ran and data is ', data)
  courseEvents.rerunIndex()
  $('.giant-container, .footer, #sign-out, #changepassword-form').show()
  $('#sign-in-form, #sign-up-form, #invalid-credits').hide()
  $('.banner-in').show()
  $('.banner-out, .banner-fail').hide()
}

const signInFailure = (error) => {
  console.error('sign in failed and the error is ', error)
  $('.banner-fail').show()
  $('.banner-out, .banner-in').hide()
}

const changePasswordSuccess = (data) => {
  console.log('change password ran and data is ', data)
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
}

const signOutSuccess = () => {
  store.user = null
  $('.banner-out').show()
  $('.banner-in, .banner-fail').hide()
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
