'use strict'

const document = require('global/document')

const loop = (cb) => {
	const self = () => {
		window.requestAnimationFrame(self)
		cb()
	}
	self()
}

module.exports = loop
