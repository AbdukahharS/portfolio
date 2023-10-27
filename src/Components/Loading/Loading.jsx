import React, { useEffect, useRef, useState } from 'react'
import './loading.css'

const Loading = () => {
  const [styles, setStyles] = useState([])
  const numParticles = 75
  const contRef = useRef(null)

  // Create an array to store particle components
  const particles = []

  // Create refs to store the DOM elements
  const particleRefs = useRef(Array(numParticles).fill(null))

  for (let i = 0; i < numParticles; i++) {
    particles.push(
      <div
        style={{ ...styles[i], animationDelay: i / 30 + 's' }}
        key={i}
        className='particle'
        ref={(el) => (particleRefs.current[i] = el)}
      ></div>
    )
  }

  useEffect(() => {
    // Initial styles
    const initialStyles = Array(numParticles).fill({
      top: '50%',
      left: '50%',
    })
    setStyles(initialStyles)

    const closeLoader = setTimeout(() => {
      contRef.current.style.opacity = 0
      contRef.current.style.zIndex = -50
    }, 7500)

    const timer = setTimeout(() => {
      // Update the styles directly without re-rendering
      particleRefs.current.forEach((el, i) => {
        if (el) {
          el.style.top = Math.random() * 100 + '%'
          el.style.left = Math.random() * 100 + '%'
          el.style.transform = 'translate(0)'
        }
      })

      return () => clearTimeout(closeLoader)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='loader-container' ref={contRef}>
      {particles}
    </div>
  )
}

export default Loading
