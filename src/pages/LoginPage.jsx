import React from 'react';
import { Header } from '../components/ui/Header';
import { CustomAsidePan } from '../components/ui/custom/CustomAsidePan';
import { AuthUiLoginPage } from '../components/ui/AuthUiLoginPage';
export const LoginPage = () => {
  return (
    <div className='containerLoginPage'>
        <div className="contentLoginPage">
            <Header/>
            <CustomAsidePan/>
            <AuthUiLoginPage/>
        </div>
    </div>
  )
}