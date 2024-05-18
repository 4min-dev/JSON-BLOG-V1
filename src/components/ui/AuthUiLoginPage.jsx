import React, { useContext, useState } from 'react';
import { CustomInput,CustomButton, UserLoginLinks } from './index.js'
import { UsersDataContext } from '../../context/UsersDataContext.js';
import { validateUserLogin } from '../../utils/validation/validateUserLogin.js'
export const AuthUiLoginPage = () => {
  let [ loginData, setLoginData ] = useState({username:'',password:''})
  let [ validateStatus, setValidateStatus ] = useState({valid:false,response:''})
  let { users, setAuthUser } = useContext(UsersDataContext)

const authSuccsess = (loginInfo) => {
  setAuthUser({...users.find((el) => el.username === loginInfo.username),isAuth:true})
}
  const submitToValidateForm = (loginInfo) => {
    const authUs = () => {
      users.some((el) => el.username === loginInfo.username && el.password === loginInfo.password)
      authSuccsess(loginInfo)
    }
    validateUserLogin(loginInfo, users, setValidateStatus, authUs)
  }

  return (
    <div className='containerUiLoginPage'>
      <div className="contentUiLoginPage">
        <form>
        {(!validateStatus.valid && validateStatus.response) && <span className="isntValidUserInfo"><h3>{validateStatus.response}</h3></span> }
        {(validateStatus.valid && validateStatus.response) && <span className='validUserInfo'><h3>{validateStatus.response}</h3></span>}
        <CustomInput value={loginData.username} placeholder='Login' type='input' className='loginPageInput' onChange={(e) => setLoginData({...loginData,username:e.target.value})}/>
        <CustomInput value={loginData.password} placeholder='Password' type='password' className='loginPageInput' onChange={(e) => setLoginData({...loginData,password:e.target.value})}/>
        <CustomButton classname={'customButton'} buttonText='Sign in' id='loginPageSendButton' handleClick={() => {
          submitToValidateForm({
            username:loginData.username,
            password:loginData.password
          })
        }}/>
        <UserLoginLinks/>
        </form>
      </div>
    </div>
  )
}