import React from 'react'

const container = ({ children }) => {
  return (
    <div className='flex max-w-7xl min-h-screen mx-auto border'>{children}</div>
  )
}

export default container