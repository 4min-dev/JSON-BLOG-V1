import React, { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { UsersDataContext } from '../../context/UsersDataContext'
import { CustomButton, CustomInput } from '../ui'
export const NewPostPan = ({setNewPostContent,newPostContent,setPopupActive}) => {
    const { createNewPost } = useContext(PostsContext)
    const { authUser } = useContext(UsersDataContext)
  return (
    <form className='newPostPan'>
                <CustomInput type={'text'} placeholder={'Title'} onChange={(e) => setNewPostContent({...newPostContent,title:e.target.value})} id={'customPopupInput'}></CustomInput>
                <textarea placeholder={'Description'} onChange={(e) => setNewPostContent({...newPostContent,body:e.target.value})}></textarea>
                <CustomButton classname={'customButton'} disabled={!newPostContent.title || !newPostContent.body} buttonText={'New Post'} id={'newPostPanCreatePostButton'} handleClick={() => {
                    createNewPost({title:newPostContent.title,body:newPostContent.body,id:new Date().getTime(),userId:authUser.id})
                    setPopupActive(false)
                }}></CustomButton>
    </form>
  )
}
