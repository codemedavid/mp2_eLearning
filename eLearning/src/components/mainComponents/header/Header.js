import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import "./header.css";
import LogoIcon from '../../../assets/images/icon.png'
function Header() {

	return (
		<div className="navbar bg-base-50">
  <div className="flex-1 ">
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
		<FontAwesomeIcon icon={faUser} className="fs-2"/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to={'/admin'}>Setting</Link></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
	);
}

export default Header;


