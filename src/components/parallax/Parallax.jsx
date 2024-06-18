import React from 'react'

function Parallax({ slides }) {
  const parallaxStyles = {
    backgroundImage: `url(${slides[0].url})`,
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const sectionStyles = {
    padding:' 50px 0',
    // height: '100vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  }

  return (
    <>
      <div style={parallaxStyles}>
        <h1 style={{ color: 'white', fontSize: '4rem', textAlign: 'center', padding: '20px' }}>Parallax Section</h1>
        
      </div>

    
    </>
  )
}

export default Parallax
