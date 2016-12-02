'use strict'

const yo = require('yo-yo')
const document = require('global/document')

// -------------------------------

const renderDot = function (dot) {
	return yo `
		<circle
			cx="${dot.x}" cy="${dot.y}"
			r="${dot.r}"
			fill="${dot.color}"
		/>
	`
}

const render = function (width, height, dots) {
	const renderedDots = dots.map(renderDot)
	return yo `
		<svg width="${width}" height="${height}">
			${renderedDots}
		</svg
	`
}

// -------------------------------

// state
const width = 400
const height = 400
let dots = [
	{x: 40, y: 80, r: 10, color: 'red'},
	{x: 200, y: 280, r: 20, color: 'blue'},
	{x: 320, y: 120, r: 15, color: 'yellow'}
]

// -------------------------------

const el = render(width, height, dots)
document.body.appendChild(el)
