'use strict'

const yo = require('yo-yo')
const document = require('global/document')

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

const app = () => {
	const width = 100
	const height = 100
	const dots = [
		{x: 10, y: 20, r: 10, color: 'red'},
		{x: 50, y: 70, r: 20, color: 'blue'},
		{x: 80, y: 30, r: 15, color: 'yellow'}
	]

	const el = render(width, height, dots)
	document.body.appendChild(el)
}

app()
