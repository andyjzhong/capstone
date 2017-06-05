'use strict'

const indexCoursesTemplate = require('../templates/helpers/course-displayer.hbs')

const actionFailure = function (error) {
  console.error(error)
}

const createCourseSuccess = function (data) {
  console.log('Successfully created Course.')
  console.log('Data is: ', data)
}

const indexCourseSuccess = function (data) {
  console.log('Successfully indexed Courses.')
  console.log('Data is: ', data)
  const indexCoursesHtml = indexCoursesTemplate({ courses: data.courses })
  $('#handlebars-content').html(indexCoursesHtml)
}

module.exports = {
  createCourseSuccess,
  indexCourseSuccess,
  actionFailure
}
