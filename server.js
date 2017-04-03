'use strict'

const path = require('path')
const express = require('express')
const vhost = require('vhost')

const app = express()

app.use(vhost('publisher.dev', express.static(path.join(__dirname, 'static', 'publisher'))))
app.use(vhost('widget.dev', express.static(path.join(__dirname, 'static', 'widget'))))

app.listen(8080, () => console.log('Server is running'))
