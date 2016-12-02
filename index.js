'use strict'

const yo = require('yo-yo')
const document = require('global/document')
const randomColor = require('random-color')

// -------------------------------

const renderDot = (dot, i, removeDot) => {
	const onClick = () => removeDot(i)
	return yo `
		<circle
			cx="${dot.x}" cy="${dot.y}"
			r="${dot.r}"
			fill="${dot.color}"
			onclick=${onClick}
		/>
	`
}

const render = (width, height, dots, removeDot, addDot) => {
	return yo `
		<svg width="${width}" height="${height}">
			<rect
				width="${width}" height="${height}"
				fill="transparent"
				onclick=${addDot}
			/>
			${dots.map((dot, i) => renderDot(dot, i, removeDot))}
		</svg
	`
}

// -------------------------------

const width = 400
const height = 400
let dots = []

const removeDot = (i) => {
	dots = dots.filter((dot, j) => j !== i)
	rerender()
}

const addDot = () => {
	dots = dots.concat({
		x: Math.random() * width,
		y: Math.random() * width,
		r: 5 + Math.random() * 20,
		color: randomColor().hexString()
	})
	rerender()
}

// -------------------------------

const el = render(width, height, dots, removeDot, addDot)
const rerender = () => {
	yo.update(el, render(width, height, dots, removeDot, addDot))
}

for (let i = 0; i < 10; i++) addDot()
document.body.appendChild(el)
