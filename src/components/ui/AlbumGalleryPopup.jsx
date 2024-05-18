import React from 'react'
import { PopupWindow } from './PopupWindow'
import { CustomFileUpload } from './custom/CustomFileUpload'
import preloader from '../../style/img/preloader.gif'
export const AlbumGalleryPopup = ({setAlbumOpenStatus,hasAlbumOpen,setNewImgToPopup,newImgToPopup}) => {
  console.log(hasAlbumOpen)
  return (
    <PopupWindow setPopup={setAlbumOpenStatus} id={'contentAlbumPhotosPopup'}>
    {hasAlbumOpen.popupContent.map((el,i) => <a href={el.url} key={el.url + i}>
       <img alt={`galleryImg${el.id}`} 
       src={hasAlbumOpen.popupContent.length < 0 ? preloader : el.thumbnailUrl}/></a>)}
       <CustomFileUpload 
       id={'customFileUploadNewImageToPopup'} fileUploadTitle={'New Image'} imgAvatar={newImgToPopup} setAvatar={setNewImgToPopup}/>
   </PopupWindow>
  )
}