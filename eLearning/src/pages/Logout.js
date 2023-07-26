import React from 'react'
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate()
    const logout = () => {     
      localStorage.removeItem("token");
      localStorage.removeItem('userId')
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
