import React from 'react'
import { PopupWindow } from './PopupWindow'
import { CustomInput } from './custom/CustomInput'
import { CustomFileUpload } from './custom/CustomFileUpload'
import { CustomButton } from './custom/CustomButton'
export const NewAlbumPopup = ({setNewAlbumPopup,setNewTitle,newAlbumTitle,setNewAlbumLogo,newAlbumLogo,addNewAlbum,authUser}) => {
  return (
    <PopupWindow setPopup={setNewAlbumPopup} popupTitle={'New Album'} id={'contentNewAlbumPopup'}>
    <form>
    <CustomInput value={newAlbumTitle} placeholder={'Title'} id={'newAlbumPopupTitle'} onChange={(e) => setNewTitle(e.target.value)}/>
        <CustomFileUpload id={'customFileUploadNewAlbumPopup'} fileUploadTitle={'Preview'} imgAvatar={newAlbumLogo} setAvatar={setNewAlbumLogo}/>
        <CustomButton disabled={!newAlbumTitle|| !newAlbumLogo.imgUrl || newAlbumLogo.imgStatus} classname={'customButton'} buttonText={'New Album'} handleClick={() => addNewAlbum({
            userId:authUser.id,
            id:new Date().getTime(),
            title:newAlbumTitle,
            url:newAlbumLogo.imgUrl,
            thumbnailUrl:newAlbumLogo.imgUrl
        })}/>
    </form>
    </PopupWindow>
  )
}