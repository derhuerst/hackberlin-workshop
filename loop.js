'use strict'

const raf = require('raf')

const loop = function (cb) {
	const tick = function () {
		cb()
		raf(tick)
	}
	tick()
}

module.exports = loop
