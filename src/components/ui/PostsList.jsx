import React, { useContext, useEffect, useState } from 'react'
import profileIcon from '../../style/img/icons/profileIcon.png'

import { Link } from 'react-router-dom'
import { PostCardControlIcons } from './PostCardControlIcons'
import { EditablePostPan } from './EditablePostPan'
import { PostsContext } from '../../context/PostsContext'
import { UsersDataContext } from '../../context/UsersDataContext'

export const PostsList = ({postInfo}) => {

let { deletePost,users,postsData } = useContext(PostsContext)
const { authUser } = useContext(UsersDataContext)
  
  let [hasPostEditable,setEditable] = useState(false)
  let [postAuthor,setAuthor] = useState({})
  
useEffect(() => {
 setAuthor(users.find((el) => el.id === postInfo.userId))
},[postsData])

  return (
    <div className='postCard'>
     <div className="containerPostAuthor">
      <div className="contentPostAuthor">
        <img src={profileIcon}/>
        <h1><Link to={`/profile/user/${postInfo.userId}`}>{postAuthor.username}</Link></h1>
      </div>
     </div>
      <h1>{postInfo.title}</h1>
      <h2>{postInfo.body}</h2>
      <div className="containerUxPostCard">
        <div className="contentUxPostCard">
          <Link to={`/posts/post/${postInfo.id}`}>View post</Link>
          {postAuthor.id === authUser.id 
          && <PostCardControlIcons editFn={setEditable} editable={hasPostEditable} deleteFn={deletePost} id={postInfo.id}/>}
        </div>
      </div>
      {hasPostEditable 
      && <EditablePostPan postInfo={postInfo} setEditable={setEditable}/>}
    </div>
  )
}