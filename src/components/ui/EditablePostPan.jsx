import React, { useContext, useState } from 'react'
import { CustomInput } from './custom/CustomInput'
import { CustomButton } from './custom/CustomButton'
import { PostsContext } from '../../context/PostsContext'

export const EditablePostPan = ({postInfo,setEditable}) => {
const { editPostContent } = useContext(PostsContext)

let [newPostContent,setNewPostContent] = useState({title:postInfo.title,body:postInfo.body})

  return (
    <form className='editablePostPan'>
        <CustomInput value={newPostContent.title} type={'text'} placeholder={'Title'} onChange={(e) => setNewPostContent({...newPostContent,title:e.target.value})}/>
        <textarea value={newPostContent.body} placeholder='Description' onChange={(e) => setNewPostContent({...newPostContent,body:e.target.value})}/>
        <CustomButton classname={'customButton'} id={'saveChangesEditablePan'} disabled={!newPostContent.title || !newPostContent.body || newPostContent.title === postInfo.title && newPostContent.body === postInfo.body} buttonText={'Save changes'} handleClick={() => {
           editPostContent({...postInfo,title:newPostContent.title,body:newPostContent.body})
           setEditable(false)
        }}/>
    </form>
  )
}