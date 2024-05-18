import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../components/ui/Header'
import { CustomAsidePan } from '../components/ui/custom/CustomAsidePan'
import { CustomButton } from '../components/ui'
import { UsersDataContext } from '../context/UsersDataContext'
import { useNavigate, useParams } from 'react-router-dom'
import anonUserIcon from '../style/img/icons/anonUserIcon.png'
import { ChangeInfoPopup } from '../components/ui/ChangeInfoPopup'
export const UserProfilePage = () => {
const { users,setUsers,authUser } = useContext(UsersDataContext)
const locate = useParams()
const navigate = useNavigate()
let [selectedProfile,setSelectedProfile] = useState({})
let [hasChangeInfoPopupHasOpen,setChangeInfoPopupStatus] = useState(false)
const selectedUser = () => {
    setSelectedProfile(users.find((el) => el.id == locate.id))
}
useEffect(() => {
    selectedUser()
},[])
  return (
    <>
    {hasChangeInfoPopupHasOpen 
    && <ChangeInfoPopup setPopup={setChangeInfoPopupStatus} authUser={authUser} users={users} setUsers={setUsers} selectedProfile={selectedProfile}/>}
     <Header/>
     <CustomAsidePan>
      {authUser.id == selectedProfile.id 
      &&  
      <>
        <CustomButton classname={'customButton'} id={'asideCustomButtonChangeInfo'} buttonText={'Change Info'} handleClick={() => setChangeInfoPopupStatus(true)}/>
      </>
      }
      <CustomButton classname={'customButton'} id={'asideCustomBackButton'} buttonText={'Back'} handleClick={() => navigate(-1)}/>
     </CustomAsidePan>
     <div className='containerUserProfilePageUserInfo'>
        <div className="contentUserProfilePageUserInfo">
            <h1>Profile Info</h1>
            <h1>Login: {selectedProfile 
            && selectedProfile.username}</h1>
            <img src={
              !selectedProfile.avatarImg
              ? anonUserIcon 
              : selectedProfile.avatarImg}/>
        </div>
     </div>
    </>
  )
}