import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import LogoIcon from '../../../assets/images/icon.png'

function Header() {
  const navigate = useNavigate();

  const logout = () => {     
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    navigate('/');
    window.location.reload();
  }

  // Check if "token" is present in localStorage
  const token = localStorage.getItem("token");

  return (
    <div className="navbar bg-base-50">
      <div className="flex-1">
        <Link to={'/'} className="logo__icon px-4">
          <img src={LogoIcon} alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-30" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="w-10">
              <FontAwesomeIcon icon={faUser} className="fs-2" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link className="justify-between" to={'/'}>
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to={'/admin'}>Setting</Link></li>
            {
              // Conditional rendering of "Login" or "Logout" button
              token
                ? <li><a onClick={logout}>Logout</a></li>
                : <li><Link to={'/login'}>Login</Link></li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
