'use strict'

const yo = require('yo-yo')
const document = require('global/document')
const randomColor = require('random-color')

// -------------------------------

const renderDot = (dot) => {
	return yo `
		<circle cx="${dot.x}" cy="${dot.y}" r="${dot.r}" fill="${dot.color}" />
	`
}

const render = (width, height, dots) => {
	return yo `
		<svg width="${width}" height="${height}">
			${dots.map(renderDot)}
		</svg
	`
}

// -------------------------------

const width = 400
const height = 400
let dots = []

const addDot = () => {
	dots = dots.concat({
		x: Math.random() * width,
		y: Math.random() * width,
		r: 5 + Math.random() * 20,
		color: randomColor().hexString()
	})
	rerender()
}

const el = render(width, height, dots)
const rerender = () => {
	yo.update(el, render(width, height, dots))
}

for (let i = 0; i < 10; i++) addDot()
document.body.appendChild(el)
