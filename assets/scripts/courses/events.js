'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// const onIndexCourses = function () {
//   event.preventDefault()
//   api.indexCourses()
//     .then()
//     .catch()
// }

// const onShowCourse = function () {
//   event.preventDefault()
//   api.showCourse()
//     .then()
//     .catch()
// }

const onCreateCourse = function (event) {
  console.log('onCreateCourse from Events.js Ran')
  const data = getFormFields(this)
  event.preventDefault()
  api.createCourse(data)
    .then(ui.createCourseSuccess)
    .catch(ui.createCourseFailure)
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
}

module.exports = {
  addHandlers
}
