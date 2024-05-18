import React from 'react'
import preloader from '../../style/img/preloader.gif'

export const ContentPreloader = () => {
  return (
   <div className="containerContentPreloader">
    <div className="contentContentPreloader">
      <img src={preloader}/>
    </div>
   </div>
  )
}