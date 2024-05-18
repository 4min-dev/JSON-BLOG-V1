import React from 'react';
import profileIcon from '../../style/img/icons/profileIcon.png';
import { Link } from 'react-router-dom';
export const AssignProfileHeader = ({authUser,unsignProfile}) => {
  return (
    <div className='containerAssignHeaderProfile'>
    <h4>{authUser.username}</h4>
    <div className='contentProfileHeader'>
     <img src={profileIcon}/>
    <ul>
        <li><Link to={`/profile/user/${authUser.id}`}><h3>Profile</h3></Link></li>
        <button type='button' onClick={() => unsignProfile()}><a href='/login'><h3>Unsign</h3></a></button>
    </ul>
    </div>
    </div>
  )
}