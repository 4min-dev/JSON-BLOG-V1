import React from 'react'

import editableImgIcon from '../../style/img/icons/editableImgIcon.png';
import deleteImgIcon from '../../style/img/icons/deleteImgIcon.png';

export const PostCardControlIcons = ({editFn,editable,deleteFn,id}) => {
  return (
    <>
       <button type='button'><img src={editableImgIcon} alt="editableCardIcon" onClick={() => editFn(!editable)}/></button>
       <button type='button'><img src={deleteImgIcon} alt="deleteImgLogo" onClick={() => deleteFn(id)}/></button>
    </>
  )
}