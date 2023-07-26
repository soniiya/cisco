import React from 'react'
import Children from './components/Children.js'

function Header({children}) {
  return (
    <>
    <h3>Header</h3>
    <Children children={children}  />
    </>
  )
}

export default Header