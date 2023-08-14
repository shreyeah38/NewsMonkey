import React from 'react'

const Spinner =()=>{

    return (
      <div className=" text-center" >
        <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

export default Spinner