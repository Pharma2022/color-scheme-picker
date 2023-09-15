import React from 'react'

const Grid = ({children}) => {
  return (
    <section className='container color-grid-section-container'>
        <div className="container grid">
            {children}
        </div>
    </section>
  )
}

export default Grid