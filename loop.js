'use strict'

const document = require('global/document')

const loop = function (cb) {
	const self = function () {
		window.requestAnimationFrame(self)
		cb()
	}
	self()
}

module.exports = loop
