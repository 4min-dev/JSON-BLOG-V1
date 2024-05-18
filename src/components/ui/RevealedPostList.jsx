import React from 'react'

export const RevealedPostList = ({postInfo}) => {

  return (
    <div className='postCard'>
      <h1>{postInfo.title}</h1>
      <h2>{postInfo.body}</h2>
    </div>
  )
}