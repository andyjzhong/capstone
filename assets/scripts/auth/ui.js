'use strict'

require('../index')
const store = require('../store')
const courseEvents = require('../courses/events.js')

const signUpSuccess = (data) => {
  // console.log('signUpSuccess ran and data is ', data)
  $('.register-success').fadeIn()
  // $('.register-success').fadeOut(7000)
  $('.banner-out, .banner-fail, .banner-in, .register-fail, .change-success, .change-fail, .credit-success, .credit-fail, .create-success').hide()
  $('.dropdown-menu').trigger('click')
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
}

const signUpFailure = (error) => {
  // console.error('sign up failed and the error is ', error)
  $('.register-fail').fadeIn('slow')
  $('.register-fail').fadeOut(6000)
  $('.banner-out, .banner-fail, .banner-in, .change-success, .change-fail, .register-success, .credit-success, .credit-fail, .create-success').hide()
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log('sign in ran and data is ', data)
  courseEvents.rerunIndex()
  $('.footer, #sign-out, #changepassword-form').show()
  $('#sign-in-form, #sign-up-form, #invalid-credits').hide()
  $('.parallax, .banner-in, .giant-container').fadeIn('slow')
  $('.banner-in').fadeOut(6000)
  $('.banner-out, .banner-fail, .register-fail, .change-success, .change-fail, .register-success, .credit-success, .credit-fail, .create-success').hide()
  $('.saveButton, .cancelButton').hide()
  $('.dropdown-menu').trigger('click')
  $('html,body').animate(
    {
      scrollTop: $('.section-2').offset().top
    },
    'slow'
  )
}

const signInFailure = (error) => {
  // console.error('sign in failed and the error is ', error)
  $('.banner-fail').fadeIn('slow')
  $('.banner-fail').fadeOut(6000)
  $('.banner-out, .banner-in, .register-fail, .change-success, .change-fail, .register-success, .credit-success, .credit-fail, .create-success').hide()
}

const changePasswordSuccess = (data) => {
  // console.log('change password ran and data is ', data)
  $('.change-success').fadeIn('slow')
  $('.change-success').fadeOut(6000)
  $('.banner-out, .banner-fail, .banner-in, .register-fail, .change-fail, .register-success, .credit-success, .credit-fail, .create-success').hide()
  $('.dropdown-menu').trigger('click')
}

const changePasswordFailure = (error) => {
  // console.error('change password failed and the error is ', error)
  $('.change-fail').fadeIn('slow')
  $('.change-fail').fadeOut(6000)
  $('.banner-out, .banner-fail, .banner-in, .register-fail, .change-success, .register-success, .credit-success, .credit-fail, .create-success').hide()
}

const signOutSuccess = () => {
  store.user = null
  $('.banner-out').fadeIn('slow')
  $('.banner-out').fadeOut(6000)
  $('.banner-fail, .banner-in, .register-fail, .change-success, .change-fail, .register-success, .credit-success, .credit-fail, .create-success').hide()
  $('.dropdown-menu').trigger('click')
}

const signOutFailure = (error) => {
  // console.error(error)
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
