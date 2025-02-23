import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import {  Layout as LayoutIcon, Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <LayoutIcon className="w-5 h-5" />, href: '/dashboard' },
    
  ];

  const handleLogout = () => {
    // Lakukan proses logout di sini, seperti menghapus token dari localStorage
    localStorage.removeItem('authToken'); // Contoh: menghapus token

    // Arahkan pengguna ke halaman home
    navigate('/');
  };

  return (
    <>
      <div className="w-full shadow-lg bg-base-600 ">
        <nav>
          <div className="navbar max-w-7xl mx-auto px-4">
            {/* Navbar Start - Logo & Mobile Menu */}
            <div className="navbar-start">
              <div className="dropdown">
                <label 
                  tabIndex={0} 
                  className="btn btn-ghost lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </label>
                {/* Mobile Menu */}
                <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={item.href}
                        className="flex items-center gap-2 py-2"
                      >
                        {item.icon}
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/" className="btn btn-ghost text-xl gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
                E-Learning
              </Link>
            </div>

            {/* Navbar Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href}
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-content"
                    >
                      {item.icon}
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navbar End - Profile Avatar Dropdown */}
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label 
                  tabIndex={0} 
                  className="btn btn-ghost btn-circle avatar"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="w-10 rounded-full bg-primary">
                    <User className="w-6 h-6 m-2 text-primary-content" />
                  </div>
                </label>
                <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  ? 'block' : 'hidden'}`}>
                  <li>
                    <Link to="/profile" className="py-2">
                      <User className="w-5 h-5" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="py-2 text-error">
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Theme Toggle - Fixed Bottom Right */}
      <div className="fixed bottom-4 right-4">
        <label className="swap swap-rotate btn btn-circle btn-ghost">
          <input type="checkbox" className="theme-controller" value="light" />
          {/* Sun Icon */}
          <svg className="swap-on w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          {/* Moon Icon */}
          <svg className="swap-off w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>

      {/* Content Area */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;