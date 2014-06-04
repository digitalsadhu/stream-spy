'use strict';

var through = require('through')

module.exports = function (callback) {

  var buffer = []

  var write = function (chunk) {
    buffer.push(chunk)
  }

  var end = function () {
    this.queue(null)
    callback(buffer)
  }

  return through(write, end)
}
