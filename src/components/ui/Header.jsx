import React, { useContext } from 'react';
import { NotAssignProfileHeader } from './NotAssignProfileHeader';
import { AssignProfileHeader } from './AssignProfileHeader';
import { UsersDataContext } from '../../context/UsersDataContext';
import { Link } from 'react-router-dom';
export const Header = () => {
    const { authUser,setAuthUser } = useContext(UsersDataContext)

const unsignProfile = () => {
    setAuthUser({username:null,password:null,email:null,isAuth:null,id:null})
}

  return (
    <header>
        <div className='containerLogoHeader'>
            <div className='contentLogoHeader'>
                <h1>JSON Blog</h1>
            </div>
        </div>
        <ul>
            <li><Link to='/posts'><h2>Posts</h2></Link></li>
            <li><Link to='/albums'><h2>Albums</h2></Link></li>
        </ul>
        <div className='containerProfileHeader'>
            <div className='contentProfileHeader'>
                {!authUser.isAuth 
                ? <NotAssignProfileHeader/> 
                : <AssignProfileHeader authUser={authUser} unsignProfile={unsignProfile}/>}
            </div>
        </div>
    </header>
  )
}