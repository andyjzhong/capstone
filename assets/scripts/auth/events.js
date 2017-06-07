'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const setUpApp = function () {
  $('').show()
  $('.giant-container, .footer, #sign-out, #changepassword-form').hide()
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signup-form').trigger('reset')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in-form').trigger('reset')
  $('.giant-container, .footer, #sign-out, #changepassword-form').show()
  $('#sign-in-form, #sign-up-form').hide()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#changepassword-form').trigger('reset')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#sign-in-form').show()
  $('.giant-container, .footer, #sign-out, #changepassword-form, #sign-up-form').hide()
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#changepassword-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers,
  setUpApp,
  onSignIn
}
