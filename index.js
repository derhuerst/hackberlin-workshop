'use strict'

const yo = require('yo-yo')
const document = require('global/document')
const randomColor = require('random-color')
const loop = require('./loop')

// -------------------------------

const renderDot = function (dot, i, removeDot) {
	const onClick = function () {
		removeDot(i)
	}
	return yo `
		<circle
			cx="${dot.x}" cy="${dot.y}"
			r="${dot.r}"
			fill="${dot.color}"
			onclick=${onClick}
		/>
	`
}

const render = function (width, height, dots, removeDot, addDot) {
	const renderedDots = dots.map(function (dot, i) {
		return renderDot(dot, i, removeDot)
	})
	return yo `
		<svg width="${width}" height="${height}">
			<rect
				width="${width}" height="${height}"
				fill="transparent"
				onclick=${addDot}
			/>
			${renderedDots}
		</svg
	`
}

// -------------------------------

// state
const width = 400
const height = 400
let dots = []

// actions
const removeDot = function (i) {
	dots = dots.filter((dot, j) => j !== i)
}
const addDot = function () {
	dots = dots.concat({
		x: Math.random() * width,
		y: Math.random() * width,
		r: 5 + Math.random() * 20,
		color: randomColor().hexString()
	})
}

for (let i = 0; i < 10; i++) addDot()

// -------------------------------

const el = render(width, height, dots, removeDot, addDot)
document.body.appendChild(el)

const rerender = function () {
	yo.update(el, render(width, height, dots, removeDot, addDot))
}
loop(rerender)
