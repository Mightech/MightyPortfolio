
import './App.css'
import About from './pages/landingpage/About'
import Landingpage from './pages/landingpage/Landingpage'
import { BrowserRouter, Routes, Route} from 'react-router'
import Myproject from './pages/landingpage/Myproject'
import Myskill from './pages/landingpage/Myskill'
import Getintouch from './pages/landingpage/Getintouch'
// import Header from './components/header/Header'
import Homeroute from './components/Homeroute'


function App() {
 
  return (
    <>
 

<BrowserRouter>

 <Routes>
  
  <Route path='/' element={   <Homeroute/>}>
  <Route index element= {<Landingpage/>}/>
 
 <Route path='/about' element={<About/>}/>
    <Route path='/myproject' element={<Myproject/>}/>
     <Route path='/myskill'element={<Myskill/>}/>
      <Route path='/contact' element={<Getintouch/>}/>
      
  </Route>

   
     </Routes>
    </BrowserRouter>
 
   
    </>
  )
}

export default App
