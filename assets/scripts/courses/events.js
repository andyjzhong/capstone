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
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onEditCourse)
      $('.saveButton').on('click', onSaveCourse)
      $('.cancelButton').on('click', onCancelCourse)
    })
    .catch(ui.actionFailure)
}

const rerunIndex = function () {
  console.log('rerunIndex from Events.js Ran')
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onEditCourse)
      $('.saveButton').on('click', onSaveCourse)
      $('.cancelButton').on('click', onCancelCourse)
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
  $('#create-course-form').trigger('reset')
}

// This function allows fields to be changed and displays the Edit UI
const onEditCourse = function (event) {
  console.log('onEditCourse from Events.js ran.')
  const id = $(this).attr('data-id')
  $('td[data-id=' + id + ']').attr('contenteditable', 'true')
  $('tr[data-id=' + id + ']').css('border', '3px solid #4f81c5')
  $('tr[data-id=' + id + ']').css('background-color', '#FFF9B7')
  $('.submit-edit').on('click', onSaveCourse)
  $('.cancel-edit').on('click', onCancelCourse)
  const thisEditButton = $(this)
  const thisDestroyButton = $(this).parent().parent().find('td.C6')[0].firstElementChild
  console.log('This Button is: ', thisEditButton)
  console.log('This Button is: ', thisDestroyButton)
  $(this).hide()
  $(this.parent).hide()

  // $('.saveButton, .cancelButton').show()
  // $('.editButton, .destroyButton').hide()
}

// This function will ultimately be what actually fires the ajax call for updating this item.
const onSaveCourse = function (event) {
  const courseTitle = $(this).parent().parent().find('td.C1')[0].innerHTML
  const courseSemester = $(this).parent().parent().find('td.C2')[0].innerHTML
  const courseGrade = $(this).parent().parent().find('td.C3')[0].innerHTML
  const courseCredits = $(this).parent().parent().find('td.C4')[0].innerHTML
  const strippedTitle = courseTitle.replace(/(<([^>]+)>)/ig, '')
  const strippedSemester = courseSemester.replace(/(<([^>]+)>)/ig, '')
  const strippedGrade = courseGrade.replace(/(<([^>]+)>)/ig, '')
  const strippedCredits = courseCredits.replace(/(<([^>]+)>)/ig, '')
  const id = $(this).prev().attr('data-id')
  const data = {
    'course': {
      'title': strippedTitle,
      'semester': strippedSemester,
      'grade': strippedGrade,
      'credits': strippedCredits
    }
  }
  console.log(data, id)
  api.updateCourse(data, id)
    .then(ui.updateCourseSuccess)
    .catch(ui.actionFailure)
  $('td[data-id=' + id + ']').attr('contenteditable', 'false')
  $('tr[data-id=' + id + ']').css('border', 'none')
  $('tr[data-id=' + id + ']').css('background-color', 'rgba(255,255,255,.8)')
  // $('.saveButton, .cancelButton').hide()
  // $('.editButton, .destroyButton').show()
}

// This function reverts all fields back to being uneditable.
const onCancelCourse = function (event) {
  console.log('onCancelCourse from Events.js ran.')
  const id = $(this).attr('data-id')
  $('td[data-id=' + id + ']').attr('contenteditable', 'false')
  $('tr[data-id=' + id + ']').css('border', 'none')
  $('tr[data-id=' + id + ']').css('background-color', 'none')
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onEditCourse)
      $('.saveButton').on('click', onSaveCourse)
      $('.cancelButton').on('click', onCancelCourse)
    })
    .catch(ui.actionFailure)
  // $('.saveButton, .cancelButton').hide()
  // $('.editButton, .destroyButton').show()
}

const addHandlers = () => {
  $('#create-course-form').on('submit', onCreateCourse)
  $('#indexButton').on('click', onIndexCourses)
  $('.destroyButton').on('click', onDestroyCourse)
  $('.editButton').on('click', onEditCourse)
  $('.saveButton').on('click', onSaveCourse)
  $('.cancel-edit').on('click', onCancelCourse)
}

module.exports = {
  addHandlers,
  rerunIndex
}
