import React from 'react'

function Spinner() {
  return (
    <div>
      <div className="d-flex justify-content-center">
  <div className="spinner-border text-light" style={{width : "3rem" , height : "3rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </div>
  )
}

export default Spinner
