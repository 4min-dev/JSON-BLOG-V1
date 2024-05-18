import React, { useState } from 'react'
import { CustomButton } from './custom/CustomButton'

export const EditableCommentPan = ({commentData,editComment,setEditable}) => {
    let [newBody,setNewBody] = useState(commentData.body)
  return (
    <form className='editableCommentPan'>
        <textarea value={newBody} placeholder='Comment text' onChange={(e) => setNewBody(e.target.value)}/>
        <CustomButton classname={'customButton'} id={'saveChangesEditablePan'} disabled={!newBody || newBody === commentData.body} buttonText={'Save changes'} handleClick={() => {
            editComment({...commentData,body:newBody})
            setEditable(false)
        }
            }/>
    </form>
  )
}