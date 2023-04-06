import React from 'react'
import startvideo from '../assets/Start.mp4'
export default function Start() {
  return (
    <div>
      <div className='overlay'>
      <video src={startvideo} autoPlay loop muted cover />

      </div>
    </div>
  )
}
