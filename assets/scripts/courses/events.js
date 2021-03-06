'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const courseStore = require('../courseStore')
const api = require('./api')
const ui = require('./ui')

const onIndexCourses = function () {
  // console.log('onIndexCourse from Events.js Ran')
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
    .then(() => {
      $('.saveButton, .cancelButton').hide()
      $('.saveButton, .cancelButton').off()
    })
  courseStore.id = null
}

const rerunIndex = function () {
  // console.log('rerunIndex from Events.js Ran')
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onEditCourse)
      $('.saveButton').on('click', onSaveCourse)
      $('.cancelButton').on('click', onCancelCourse)
    })
    .catch(ui.actionFailure)
    .then(() => {
      $('.saveButton, .cancelButton').hide()
      $('.saveButton, .cancelButton').off()
    })
  // $($($($('tr[data-id=' + id + ']').children()[4])[0]).children()[1]).hide()
  // $($($($('tr[data-id=' + id + ']').children()[5])[0]).children()[1]).hide()
  // $('.saveButton').on('click', onSaveCourse)
  // $('.cancelButton').on('click', onCancelCourse)
  courseStore.id = null
}

const onDestroyCourse = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  // console.log(id)
  api.destroyCourse(id)
    .then(ui.destroyCourseSuccess)
    .catch(ui.actionFailure)
    .then(rerunIndex)
  courseStore.id = null
}

const onCreateCourse = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createCourse(data)
    .then(ui.createCourseSuccess)
    .catch(ui.actionFailure)
    .then(rerunIndex)
  $('#create-course-form').trigger('reset')
  $('.create-success').fadeIn()
  $('.create-success').fadeOut(4500)
  courseStore.id = null
}

// This function allows fields to be changed and displays the Edit UI
const onEditCourse = function (event) {
  // console.log('onEditCourse from Events.js ran.')
  const id = $(this).attr('data-id')
  $($('tr[data-id=' + id + ']').children()[0]).attr('contenteditable', 'true')
  $($('tr[data-id=' + id + ']').children()[1]).attr('contenteditable', 'true')
  $($('tr[data-id=' + id + ']').children()[2]).attr('contenteditable', 'true')
  $($('tr[data-id=' + id + ']').children()[3]).attr('contenteditable', 'true')
  $('tr[data-id=' + id + ']').css('border', '3px solid #4f81c5')
  $('tr[data-id=' + id + ']').css('background-color', '#FCF8E3')
  $('.editButton, .destroyButton, .saveButton, .cancelButton').hide()
  $($($($('tr[data-id=' + id + ']').children()[4])[0]).children()[1]).fadeIn('slow')
  $($($($('tr[data-id=' + id + ']').children()[5])[0]).children()[1]).fadeIn('slow')
  $('.saveButton').on('click', onSaveCourse)
  $('.cancelButton').on('click', onCancelCourse)
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
  api.updateCourse(data, id)
    .then(ui.updateCourseSuccess)
    .catch(ui.updateCourseFailure)
    .then(() => {
      $('.editButton, .destroyButton').fadeIn('slow')
      $('.saveButton, .cancelButton').off()
      courseStore.id = null
    })
  $($('tr[data-id=' + id + ']').children()[0]).attr('contenteditable', 'false')
  $($('tr[data-id=' + id + ']').children()[1]).attr('contenteditable', 'false')
  $($('tr[data-id=' + id + ']').children()[2]).attr('contenteditable', 'false')
  $($('tr[data-id=' + id + ']').children()[3]).attr('contenteditable', 'false')
  $('tr[data-id=' + id + ']').css('border', 'none')
  $('tr[data-id=' + id + ']').css('background-color', 'rgba(255,255,255,.8)')
  $($($($('tr[data-id=' + id + ']').children()[4])[0]).children()[0]).fadeIn('slow')
  $($($($('tr[data-id=' + id + ']').children()[5])[0]).children()[0]).fadeIn('slow')
  $($($($('tr[data-id=' + id + ']').children()[4])[0]).children()[1]).hide()
  $($($($('tr[data-id=' + id + ']').children()[5])[0]).children()[1]).hide()
  $('.saveButton, .cancelButton').off()
}

// This function reverts all fields back to being uneditable.
const onCancelCourse = function (event) {
  const id = $(this).attr('data-id')
  $($('tr[data-id=' + id + ']').children()[0]).attr('contenteditable', 'false')
  $($('tr[data-id=' + id + ']').children()[1]).attr('contenteditable', 'false')
  $($('tr[data-id=' + id + ']').children()[2]).attr('contenteditable', 'false')
  $($('tr[data-id=' + id + ']').children()[3]).attr('contenteditable', 'false')
  $('tr[data-id=' + id + ']').css('border', 'none')
  $('tr[data-id=' + id + ']').css('background-color', 'none')
  $('.saveButton, .cancelButton').off()
  api.indexCourses()
    .then(ui.indexCourseSuccess)
    .then(() => {
      $('.destroyButton').on('click', onDestroyCourse)
      $('.editButton').on('click', onEditCourse)
      $('.saveButton, .cancelButton').off()
    })
    .catch(ui.actionFailure)
    .then(() => {
      $('.saveButton, .cancelButton').hide()
      $('.saveButton, .cancelButton').off()
      $('.editButton').fadeIn('slow')
      $('.destroyButton').fadeIn('slow')
      courseStore.id = null
    })
}

const addHandlers = () => {
  $('#create-course-form').on('submit', onCreateCourse)
  $('#indexButton').on('click', onIndexCourses)
  $('.destroyButton').on('click', onDestroyCourse)
  $('.editButton').on('click', onEditCourse)
  $('.saveButton').on('click', onSaveCourse)
  $('.cancelButton').on('click', onCancelCourse)
}

module.exports = {
  addHandlers,
  rerunIndex
}
