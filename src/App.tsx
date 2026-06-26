import { useState } from 'react'

import './App.css'

function App() {

  return (
   <div className="App">

    {/*==============MOBILENAVBAR==============*/ }
    <nav className='Mobile-navbar'>
      <ul>
        <div className="Profilewrapper"><img src="./public/Profilphoto.png" alt="Profilphoto" /><span>Onur Tırpan</span></div>
        
        <div className="navbar-buttons">
           <li><a href="#">B</a></li>
        <li><a href="#">B</a></li>
        <li><a href="#">B</a></li>
        <li><a href="#">B</a></li>
        </div>

    <div className="logowrapper">
     <a href=""><img src="./public/Profilphoto.png" alt="Logo" /></a>
    </div>
      </ul>
    </nav>
   {/*===============================================*/}




       {/*==============RİGHTBAR==============*/ }
      <section className="rightbar">

      </section>
        {/*===============================================*/}






        {/*==============MAIN==================*/ }
      <main>

      </main>
        {/*===============================================*/}






        {/*==============SİGHTBAR==================*/ }
       
       <section className="sightbar">


       </section>
        {/*===============================================*/}

   </div>
  )
}

export default App
