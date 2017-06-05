'use strict'

const createCourseSuccess = function (data) {
  console.log('Successfully created Course.')
  console.log('Data is: ', data)
}

const createCourseFailure = function (error) {
  console.error(error)
}

module.exports = {
  createCourseSuccess,
  createCourseFailure
}
