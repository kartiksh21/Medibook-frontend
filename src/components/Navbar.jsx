import React, { useState } from 'react'
import {assets} from '../assets/assets_admin/assets'
import {assets2} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate=useNavigate();
    const [showMenu,setShowMenu]=useState(true);
    const [token,setToken]=useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-4 '>
      <img onClick={()=>{navigate('/')}} className='w-44 cursor-pointer' src={assets2.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
       
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
         <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
         <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
         <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token? <div>
              <ul>
                <li className='cursor-pointer' onClick={()=>navigate('my-profile')}>My Profile</li>
                <li className='cursor-pointer' onClick={()=>navigate('my-appointments')}>My Appointments</li>
                <li className='cursor-pointer' onClick={()=>setToken(false)}>Logout</li>
              </ul>
            </div>
            : <button onClick={()=>navigate('/login')}>Create account</button>

        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets2.menu_icon} alt="" />
          {/*------Mobile menu------  */}
          <div className={`${showMenu?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
              <img className='w-36' src={assets2.logo} alt="" />
              <img className='w-7' onClick={()=>setShowMenu(false)} src={assets2.cross_icon} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <NavLink onClick={()=>setShowMenu(false)} to='/'>Home</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/doctors'>All Doctors</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/about'>About</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/contact'>Contacts</NavLink>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar
