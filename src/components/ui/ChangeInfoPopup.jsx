import React, { useState } from 'react'
import { PopupWindow } from './PopupWindow'
import { CustomInput } from './custom/CustomInput'
import { CustomFileUpload } from './custom/CustomFileUpload'
import { CustomButton } from './custom/CustomButton'

export const ChangeInfoPopup = ({setPopup,authUser,users,setUsers,selectedProfile}) => {
let [newUserInfo,setNewUserInfo] = useState({password:'',email:''})
let [newUserAvatar,setNewAvatar] = useState({imgUrl:null,imgStatus:null})
const updateUserPersonalData = (newPersonalData) => {
   const allUsers = users
   const selectedUser = allUsers.find((el) => el.id === newPersonalData.id)
   setUsers(allUsers,{...selectedUser})
   setPopup(false)
}
  return (
    <PopupWindow setPopup={setPopup} id={'changeUserInfoPopup'} popupTitle={'Change Info'}>
        <form>
            <CustomInput type={'password'} value={newUserInfo.password} onChange={e => setNewUserInfo({...newUserInfo,password:e.target.value})} placeholder={'New Password'}/>
            <CustomInput type={'email'} value={newUserInfo.email} onChange={e => setNewUserInfo({...newUserInfo,email:e.target.value})} placeholder={'New E-Mail'}/>
            <CustomFileUpload id={'customFileUploadChangeInfoPopup'} fileUploadTitle={'New Avatar'} imgAvatar={newUserAvatar} setAvatar={setNewAvatar}/>
            <CustomButton disabled={
                !newUserInfo.password || newUserInfo.password.length < 6
                || !newUserInfo.email
                || !newUserAvatar.imgUrl
                || newUserInfo.password == authUser.password 
                || users.some((el) => el.email == newUserInfo.email
                || !newUserInfo.email.includes('@')
                )} buttonText={'Save Changes'} classname={'customButton'} id={'customButtonSaveNewUserInfo'} handleClick={() => {
                    updateUserPersonalData(
                        selectedProfile,
                        selectedProfile.password = newUserInfo.password, 
                        selectedProfile.email = newUserInfo.email,
                        selectedProfile.avatarImg = newUserAvatar.imgUrl
                        )
                }}/>
        </form>
    </PopupWindow>
  )
}