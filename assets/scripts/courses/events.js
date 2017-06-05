'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const courseStore = require('../courseStore')
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

const onDestroyCourse = function (event) {
  event.preventDefault()
  const id = courseStore.id
  console.log(id)
  api.destroyCourse(id)
    .then(ui.destroyCourseSuccess)
    .catch(ui.actionFailure)
  courseStore.id = null
  courseStore.templateType = null
}

const sayHi = function () {
  alert('Hi')
  console.log('Hi')
}

const addHandlers = () => {
  $('#create-course-form').on('submit', onCreateCourse)
  $('#indexButton').on('click', onIndexCourses)
  $('.destroyButton').on('click', sayHi)
}

module.exports = {
  addHandlers
}
