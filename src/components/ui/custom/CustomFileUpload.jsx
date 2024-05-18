import React, { createRef, useEffect } from 'react';
import selectImgIcon from '../../../style/img/icons/selectImgIcon.png';
import { UploadImg } from '../../../utils/UploadImg';
 
export const CustomFileUpload = ({id, fileUploadTitle,imgAvatar,setAvatar}) => {
  const imgRef = createRef(null)

  useEffect(() => {
    if(imgRef.current.value) {
      imgRef.current.value = null
    }
  },[imgAvatar])

  const sendImg = (e) => {
    if(!e) {
      return
    }
    UploadImg(e.target.files[0], imgAvatar, setAvatar,imgRef)
  }

  return (
    
      <div className='contentCustomFileUpload'>
        <h1>{fileUploadTitle}</h1>
        {imgAvatar.imgUrl && <img src={imgAvatar.imgUrl} alt='Uploaded'></img>}
        {imgAvatar.imgStatus && <span className='avatarError'>{imgAvatar.imgStatus}</span>}
        <label htmlFor={id}><img src={selectImgIcon} alt='selectImgIcon'/></label>
        <input type='file' ref={imgRef} className='customFileUpload' id={id} onChange={e => sendImg(e)}></input>
      </div>
    
  );
};
