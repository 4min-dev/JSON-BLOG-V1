import React from 'react'
import commentsNotFoundIcon from '../../style/img/icons/commentsNotFoundIcon.png'
export const CommentsIsNotDefined = () => {
  return (
    <div>
      <div className='commentsIsNotDefined'>
        <h2>No comments found, be the first to chat!</h2>
        <img src={commentsNotFoundIcon}/>
      </div>
    </div>
  )
}