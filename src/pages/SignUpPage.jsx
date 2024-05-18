import React from 'react'
import { Header } from '../components/ui/Header'
import { CustomAsidePan } from '../components/ui/custom/CustomAsidePan'
import { MainInterfaceSignUpPage } from '../components/ui/MainInterfaceSignUpPage'
export const SignUpPage = () => {
  return (
   <div>
        <div>
            <Header/>
            <CustomAsidePan/>
            <MainInterfaceSignUpPage/>
        </div>
   </div>
  )
}