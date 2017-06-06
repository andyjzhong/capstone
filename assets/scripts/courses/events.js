'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const courseStore = require('../courseStore')
const api = require('./api')
const ui = require('./ui')
const submitEditButton = require('../templates/helpers/edit-course-buttons.hbs')

const onIndexCourses = function () {
  console.log('onIndexCourse from Events.js Ran')
  event.preventDefault()
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onUpdateCourse)
    })
    .catch(ui.actionFailure)
}

const rerunIndex = function () {
  console.log('rerunIndex from Events.js Ran')
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onUpdateCourse)
    })
    .catch(ui.actionFailure)
}

const onDestroyCourse = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log(id)
  api.destroyCourse(id)
    .then(ui.destroyCourseSuccess)
    .catch(ui.actionFailure)
    .then(rerunIndex)
  courseStore.id = null
  courseStore.templateType = null
}

const onCreateCourse = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createCourse(data)
    .then(ui.createCourseSuccess)
    .catch(ui.actionFailure)
    .then(rerunIndex)
}

const onUpdateCourse = function (event) {
  console.log('onUpdateCourse from Events.js ran.')
  // const id = $(this).attr('data-id')
  // $('tr[data-id=' + id + ']').attr('contenteditable', 'true')
  // const submitEdit = submitEditButton({})
  // $('.blogpost-container[data-id=' + id + ']').append(submitEdit)
  // $('#submit-edit').on('click', onSubmitEdit)
}

const addHandlers = () => {
  $('#create-course-form').on('submit', onCreateCourse)
  $('#indexButton').on('click', onIndexCourses)
  $('.destroyButton').on('click', onDestroyCourse)
  $('.editButton').on('click', onUpdateCourse)
}

module.exports = {
  addHandlers,
  rerunIndex
}
