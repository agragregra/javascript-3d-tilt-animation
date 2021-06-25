import { gsap } from 'gsap'

// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

const body = document.querySelector('body')

	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

	})

	function updateMe() {

		dx     = clientX - cx
		dy     = clientY - cy
		tiltx  = dy / cy
		tilty  = dx / cx
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 12
		gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

	}
	
	gsap.to('.card', { zoom: .98 })
	gsap.to('.l_main', { opacity: 1, duration: .1 })
	gsap.to('.l2_main', { opacity: 1, left: -10, top: 10, duration: .25, delay: .25 })
	gsap.to('.l3_main', { opacity: 1, left: -20, top: 20, duration: .25, delay: .25 })
	gsap.to('.card-russia', { opacity: .07, duration: .1 })
	gsap.to('.card-logo_w', { opacity: 1, duration: .225 })
	gsap.to('.card-chip', { opacity: 1, duration: .225 })
	gsap.to('.card-valid', { opacity: 1, zoom: 1, duration: .1, delay: .25 })
	gsap.to('.card-number-holder', { opacity: 1, zoom: 1, duration: .1, delay: .25 })

})
