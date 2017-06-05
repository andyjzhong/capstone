'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onIndexCourses = function () {
  console.log('onIndexCourse from Events.js Ran')
  event.preventDefault()
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .catch(ui.actionFailure)
}

// const onShowCourse = function () {
//   event.preventDefault()
//   api.showCourse()
//     .then()
//     .catch()
// }

const onCreateCourse = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createCourse(data)
    .then(ui.createCourseSuccess)
    .catch(ui.actionFailure)
}

// const onUpdateCourse = function () {
//   event.preventDefault()
//   api.updateCourse()
//     .then()
//     .catch()
// }

// const onDestroyCourse = function () {
//   event.preventDefault()
//   api.destroyCourse()
//     .then()
//     .catch()
// }

const addHandlers = () => {
  $('#create-course-form').on('submit', onCreateCourse)
  $('#indexButton').on('click', onIndexCourses)
}

module.exports = {
  addHandlers
}
