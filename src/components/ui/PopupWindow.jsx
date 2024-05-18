import React from 'react'

export const PopupWindow = ({children,popupTitle,setPopup,id}) => {
  return (
    <div className='containerPopupWindow' onClick={() => setPopup(false)}>
      <div className="contentPopupWindow" onClick={(e) => e.stopPropagation()} id={id}>
        <h1>{popupTitle}</h1>
        {children}
      </div>
    </div>
  )
}