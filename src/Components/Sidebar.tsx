import React from 'react'

function Sidebar() {
  return (
  <>

   <aside className="Sidebar">
  
  <div className="logowrapper">
     <a href=""><img src="./public/Logo.png" alt="Logo" /></a>
    </div>
      
        
        <ul className="navbar-buttons">
           <li><a href="#"><i className="fa-solid fa-house"></i>Home</a></li>
        <li><a href="#"><i className="fa-solid fa-book-atlas"></i>Explore</a></li>
        <li><a href="#"><i className="fa-solid fa-message"></i>Message</a></li>
        <li><a href="#"><i className="fa-solid fa-bookmark"></i>Bookmarks</a></li>
        <li><a href="#"><i className="fa-solid fa-circle-chevron-down"></i>More</a></li>
        
        </ul>
   <div className='Settingorprofile' >
      <div className="Profilewrapper"><img src="./public/Profilphoto.png" alt="Profilphoto" /><span>Onur Tırpan</span></div>
   </div>
   </aside>
   
   </>
  )
}

export default Sidebar