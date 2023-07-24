import React from 'react'
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate()
    const logout = () => {     
      localStorage.removeItem("token");
      navigate('/')
    }
    
  return (
    <div>
      {
        logout()
      }
    </div>
  )
}

export default Logout
