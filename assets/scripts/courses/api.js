'use strict'

const config = require('../config')
const store = require('../store')
const courseStore = require('../courseStore')

// Pulls pages for current user on authentication
const indexCourses = () => {
  return $.ajax({
    url: config.apiOrigin + '/courses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCourse = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/courses/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCourse = (data) => {
  console.log('ajax data is', data)
  return $.ajax({
    url: config.apiOrigin + '/courses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateCourse = (id, data) => {
  return $.ajax({
    url: config.apiOrigin + '/courses/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyCourse = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/courses/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexCourses,
  showCourse,
  createCourse,
  updateCourse,
  destroyCourse
}
