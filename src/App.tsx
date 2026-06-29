import { useState } from 'react';
import Maincontent from "./Components/Maincontent"
import Sidebar from "./Components/Sidebar"
import Timeline from "./Components/TimeLine"
import Mobileheader from "./Components/Mobile-header"

import './App.css'

function App() {

  return (
   <div className="App">
<Sidebar/>
<Maincontent/>
<Timeline/>
<Mobileheader/>
   </div>
  )
}

export default App
