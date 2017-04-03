'use strict'

const request =require('supertest')
const server = require('../server')

describe('Simulating multiple domains at local', () => {
  it('should respond index.html', () => {
    return request('http://publisher.dev:8080')
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
  })

  it('should respond widget.js', () => {
    return request('http://widget.dev:8080')
      .get('/widget.js')
      .expect('Content-Type', /javascript/)
      .expect(200)
  })
})
