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
}

// This function allows fields to be changed and displays the Edit UI
const onEditCourse = function (event) {
  console.log('onEditCourse from Events.js ran.')
  const id = $(this).attr('data-id')
  $('td[data-id=' + id + ']').attr('contenteditable', 'true')
  $('tr[data-id=' + id + ']').css('border', '3px solid green')
  $('.submit-edit').on('click', onSaveCourse)
  $('.cancel-edit').on('click', onCancelCourse)
}

// This function will ultimately be what actually fires the ajax call for updating this item.
const onSaveCourse = function (event) {
  console.log('onSaveCourse from Events.js ran.')
  // const title = $(this).parent().find('td')[0].innerHTML
  // console.log(title)
  const courseTitle = $(this).parent().parent().find('td.C1')[0].innerHTML
  const courseSemester = $(this).parent().parent().find('td.C2')[0].innerHTML
  const courseGrade = $(this).parent().parent().find('td.C3')[0].innerHTML
  const courseCredits = $(this).parent().parent().find('td.C4')[0].innerHTML
  console.log(courseTitle)
  console.log(courseSemester)
  console.log(courseGrade)
  console.log(courseCredits)
  // const courseSemester =
  // const courseGrade =
  // const courseCredits =
  // const strippedTitle = courseTitle.replace(/(<([^>]+)>)/ig, '')
  // const strippedSemester = courseSemester.replace(/(<([^>]+)>)/ig, '')
  // const strippedGrade = courseGrade.replace(/(<([^>]+)>)/ig, '')
  // const strippedCredits = courseCredits.replace(/(<([^>]+)>)/ig, '')
  // const data = {
  //   'course': {
  //     'title': strippedTitle,
  //     'semester': strippedSemester,
  //     'grade': strippedGrade,
  //     'credits': strippedCredits
  //   }


  // const id = $(this).attr('data-id')
  // $('td[data-id=' + id + ']').attr('contenteditable', 'false')
  // $('tr[data-id=' + id + ']').css('border', 'none')
}



// const onSubmitEdit = function (event) {
//   event.preventDefault()
//   const title = $(this).parent().find('h2')[0].innerHTML
//   const blogpostContent = $(this).parent().find('p')[0].innerHTML
//   const id = $(this).prev().attr('data-id')
//   const strippedBlogContent = blogpostContent.replace(/(<([^>]+)>)/ig, '')
//   const strippedBlogTitle = blogpostTitle.replace(/(<([^>]+)>)/ig, '')
//   const data = {
//     'blogpost': {
//       'blogpostTitle': strippedBlogTitle,
//       'blogpostContent': strippedBlogContent
//     }
//   }
//   api.editBlog(data, id)
//     .then(ui.editBlogSuccess)
//     .then(() => {
//       $('p[data-id=' + id + ']').attr('contenteditable', 'false')
//       $('h2[data-id=' + id + ']').attr('contenteditable', 'false')
//       $('.one-blogpost[data-id=' + id + ']').css('border', 'none')
//       $('.blog-delete-button[data-id=' + id + ']').show()
//       $('.blog-edit-button[data-id=' + id + ']').show()
//       $('#submit-edit').remove()
//       $('#cancel-edit').remove()
//     })
//     .catch(ui.editBlogFailure)
// }












// This function reverts all fields back to being uneditable.
const onCancelCourse = function (event) {
  console.log('onCancelCourse from Events.js ran.')
  const id = $(this).attr('data-id')
  $('td[data-id=' + id + ']').attr('contenteditable', 'false')
  $('tr[data-id=' + id + ']').css('border', 'none')
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
