'use strict'

require('../index')
const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
