import React from 'react';
import { Link } from "react-router-dom";
export const UserLoginLinks = () => {
  return (
    <ul>
        <li><Link to="/login">Sign in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
    </ul>
  )
}