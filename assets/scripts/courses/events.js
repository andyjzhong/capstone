'use strict'

const api = require('./api')
const ui = require('./ui')

const onIndexCourses = function () {
  event.preventDefault()
  api.indexCourses()
    .then()
    .catch()
}

const onShowCourse = function () {
  event.preventDefault()
  api.showCourse()
    .then()
    .catch()
}

const onCreateCourse = function () {
  event.preventDefault()
  api.createCourse()
    .then(ui.createCourseSuccess)
    .catch(ui.createCourseFailure)
}

const onUpdateCourse = function () {
  event.preventDefault()
  api.updateCourse()
    .then()
    .catch()
}

const onDestroyCourse = function () {
  event.preventDefault()
  api.destroyCourse()
    .then()
    .catch()
}

module.exports = {
  onIndexCourses,
  onShowCourse,
  onCreateCourse,
  onUpdateCourse,
  onDestroyCourse
}
