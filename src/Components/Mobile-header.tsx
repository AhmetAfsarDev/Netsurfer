import React from 'react'

function Mobileheader() {
  return (
 <>
    {/*==============MOBILENAVBAR==============*/ }
    <nav className='Mobile-navbar'>
      <ul>
        <div className="Profilewrapper"><img src="./public/Profilphoto.png" alt="Profilphoto" /><span>Onur Tırpan</span></div>
        
        <ul className="navbar-buttons">
           <li><a href="#"><i className="fa-solid fa-house"></i></a></li>
        <li><a href="#"><i className="fa-solid fa-book-atlas"></i></a></li>
        <li><a href="#"><i className="fa-solid fa-message"></i></a></li>
        <li><a href="#"><i className="fa-solid fa-bookmark"></i></a></li>
      <li><a href="#"><i className="fa-solid fa-circle-chevron-down"></i></a></li>


        </ul>
    <div className="logowrapper">
     <a href=""><img src="./public/Logo.png" alt="Logo" /></a>
    </div>
      </ul>
    </nav>
   {/*===============================================*/}
   
   </>
  )
}

export default Mobileheader