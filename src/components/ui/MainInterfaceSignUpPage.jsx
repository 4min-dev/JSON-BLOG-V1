import React, { useContext, useState } from 'react'
import { CustomInput } from './custom/CustomInput'
import { CustomButton } from './custom/CustomButton'
import { CustomFileUpload } from './custom/CustomFileUpload'
import { UsersDataContext } from '../../context/UsersDataContext'
import { validateNewUserInfo } from '../../utils/validation/validateNewUserInfo'
import { UserLoginLinks } from './UserLoginLinks'
export const MainInterfaceSignUpPage = () => {
  let [userPersonalData,setData] = useState({username:'',password:'',email:''})
  let [imgAvatar, setAvatar] = useState({imgUrl: null, imgStatus: null});
  let [validateStatus,setValidateStatus] = useState({valid:false,response:''})
  let { users,setUsers } = useContext(UsersDataContext)

    const SubmitToValidateForm = (userInfo) => {
      if(!userInfo) {
        return
      }
      const addNewUser = () => {
        setUsers([...users, { ...userInfo }]);
      };
      validateNewUserInfo(userInfo, users, imgAvatar, setValidateStatus, addNewUser);
    };
  
  
  return (
    <div className='containerUiLoginPage'>
      <div className="containerUiAvatarLoginPage">
        <div className="contentUiAvatarLoginPage">
          <CustomFileUpload id='uploadAvatarSignUpPage' fileUploadTitle='Avatar' imgAvatar={imgAvatar} setAvatar={setAvatar}/>
        </div>
      </div>
        <div className="contentUiLoginPage">
        {(!validateStatus.valid && validateStatus.response) && <span className="isntValidUserInfo"><h3>{validateStatus.response}</h3></span> }
        {(validateStatus.valid && validateStatus.response) && <span className='validUserInfo'><h3>{validateStatus.response}</h3></span>}
           <form>
            <CustomInput value={userPersonalData.username} placeholder='Login' type='input' className='loginPageInput' onChange={e => setData({...userPersonalData,username:e.target.value})}/>
              <CustomInput value={userPersonalData.password} placeholder='Password' type='password' className='loginPageInput' onChange={e => setData({...userPersonalData,password:e.target.value})}/>
              <CustomInput value={userPersonalData.email} placeholder='E-Mail' type='email' className='loginPageInput' onChange={e => setData({...userPersonalData,email:e.target.value})}/>
              <CustomButton classname={'customButton'} buttonText='Sign up' id='loginPageSendButton' handleClick={() => 
                SubmitToValidateForm({
                  id: new Date().getTime(),
                  avatarImg: imgAvatar.imgUrl,
                  username: userPersonalData.username,
                  password: userPersonalData.password,
                  email: userPersonalData.email,
                  isAuth:false
                })
              }/>
      <UserLoginLinks/>
           </form>
        </div>
    </div>
  )
}