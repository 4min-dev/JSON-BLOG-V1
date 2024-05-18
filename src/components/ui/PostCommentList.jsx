import React, { useContext, useEffect, useState } from 'react'
import { UsersDataContext } from '../../context/UsersDataContext'
import { PostCardControlIcons } from './PostCardControlIcons'
import { EditableCommentPan } from './EditableCommentPan'
import anonUserIcon from '../../style/img/icons/anonUserIcon.png'
export const PostCommentList = ({commentData,deleteComment,editComment}) => {
    let {authUser,users} = useContext(UsersDataContext)
    let [hasCommentEditable,setEditable] = useState(false)
  let [selectedUser,setSelectedUser] = useState({})
useEffect(() => {
  setSelectedUser(users.find((el) => el.id === commentData.postId))
},[commentData])

  return (
    <div className='postCommentList'>
     <div className="postCommentContent">

        <div className="postCommentUserInfo">
        <img src={selectedUser && selectedUser.avatarImg ? selectedUser.avatarImg : anonUserIcon}/>
        <h1>{commentData.email}</h1>
        </div>

        {!hasCommentEditable 
        ? <h2>{commentData.body}</h2> 
        : <EditableCommentPan commentData={commentData} editComment={editComment} setEditable={setEditable}/>}

        {commentData.postId === authUser.id 
        && <div className='containerUxPostCard'>
            <div className='contentUxPostCard'>
             <PostCardControlIcons editFn={setEditable} editable={hasCommentEditable} deleteFn={deleteComment} id={commentData.id}/>
            </div>
         </div>}
     </div>
    </div>
  )
}