'use strict'

const createCourseSuccess = function (data) {
  console.log('Successfully created Course.')
}

const createCourseFailure = function (error) {
  console.error(error)
}

module.exports = {
  createCourseSuccess,
  createCourseFailure
}
