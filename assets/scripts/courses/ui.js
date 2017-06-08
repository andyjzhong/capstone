'use strict'

const indexCoursesTemplate = require('../templates/helpers/course-displayer.hbs')
const api = require('./api')
const courseStore = require('../courseStore')
const courseEvents = require('./events')

const actionFailure = function (error) {
  console.error(error)
}

const createCourseSuccess = function (data) {
  // console.log('Successfully created Course.')
  // console.log('Data is: ', data)
}

const indexCourseSuccess = function (data) {
  if (data.courses.length < 1) {
    const indexCoursesHtml = indexCoursesTemplate({ courses: data.courses })
    $('#handlebars-content').html(indexCoursesHtml)
    $('#no-courses').show()
  } else {
    const indexCoursesHtml = indexCoursesTemplate({ courses: data.courses })
    $('#handlebars-content').html(indexCoursesHtml)
    $('#no-courses').hide()
  }
}

const destroyCourseSuccess = function () {
  // console.log('Successfully destroyed Course.')
}

const updateCourseSuccess = function () {
  $('.credit-success').fadeIn()
  $('.credit-success').fadeOut(8000)
  $('.credit-fail').hide()
}

const updateCourseFailure = function () {
  $('.credit-fail').fadeIn()
  $('.credit-fail').fadeOut(8000)
  $('.credit-success').hide()
  api.indexCourses()
    .then(indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', courseEvents.onDestroyCourse)
      $('.editButton').on('click', courseEvents.onEditCourse)
      $('.saveButton').on('click', courseEvents.onSaveCourse)
      $('.cancelButton').on('click', courseEvents.onCancelCourse)
    })
    .catch(updateCourseFailure)
  courseStore.id = null
}

module.exports = {
  createCourseSuccess,
  indexCourseSuccess,
  destroyCourseSuccess,
  updateCourseSuccess,
  updateCourseFailure,
  actionFailure
}
