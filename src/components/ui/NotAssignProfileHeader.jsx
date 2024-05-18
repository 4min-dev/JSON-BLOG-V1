import React from 'react';
import profileIcon from '../../style/img/icons/profileIcon.png';
export const NotAssignProfileHeader = () => {
  return (
    <>
      <img src={profileIcon}/>
      <h3><a href='login'>Login</a></h3>
    </>
  )
}

