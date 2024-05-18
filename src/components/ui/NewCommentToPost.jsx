import React, { useContext, useState } from 'react'
import { CustomButton } from './custom/CustomButton'
import { UsersDataContext } from '../../context/UsersDataContext'

export const NewCommentToPost = ({addNewComment}) => {
    let [commentText,setCommentText] = useState('')
    const { authUser } = useContext(UsersDataContext)
  return (
    <form className='addCommentMainForm'>
        <textarea value={commentText} placeholder={'Comment text'} onChange={(e) => setCommentText(e.target.value)}/>
        <CustomButton classname={'customButton'} id={'addNewCommentButton'} disabled={!commentText} buttonText={'Create new comment'} handleClick={() => {
            addNewComment({email:authUser.email,body:commentText,postId:authUser.id,id:new Date().getTime()})
            setCommentText('')
        }}/>
    </form>
  )
}