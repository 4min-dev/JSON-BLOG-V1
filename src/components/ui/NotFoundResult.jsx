import React from 'react'
import notFoundIcon from '../../style/img/icons/notFoundIcon.png'
export const NotFoundResult = () => {
  return (
    <div className='containerNotFoundResult'>
      <div className="contentNotFoundResult">
        <h1>Request is not defined</h1>
        <img src={notFoundIcon}/>
      </div>
    </div>
  )
}