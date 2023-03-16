import React, {useState} from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import RegisterScreen from './components/RegisterScreen'
import FormSelect from './components/FormSelect';
import PrctForm from './components/PrctForm'
import PlayerDetails from './components/PlayerDetails'
import MerchendiseDetails from './components/MerchendiseDetails'
import Payment from './components/Payment'
import PlayerStatus from './components/PlayerStatus'
import UploadPhotos from './components/UploadPhotos'
import FinalDetails from './components/FinalDetails'
import Success from './components/Success'
import Dashboard from './components/Dashboard'
import '../src/components/PrctForm.css';
// import { Link } from 'react-router-dom'


// function App() {
//   const navigate = useNavigate();

//   return (
//     <Router>
//       <Routes exact path="/" element={<PrctForm />} />
//       <Routes path="/playerdetails" element={<PlayerDetails/>} />
//     </Router>

//   )
// }
// export default App


function Root() {
  const [activeMenu, setActiveMenu] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <button className='submit' style={{marginTop: '2px'}} onClick={() => navigate(-1)}>go back</button>
      <div className="topnav">
            <Link className=  { activeMenu == 'home' ? 'active' : '' } onClick={ () => {setActiveMenu('home')} } to="/">Home</Link>
            <Link className=  { activeMenu == 'dashboard' ? 'active' : '' } onClick={ () => {setActiveMenu('dashboard')} } to="/dashboard">Dashboard</Link>
        </div>
      <Routes>
        <Route exact path="/" element={<PrctForm />} />
        <Route path="playerdetails" element={<PlayerDetails />} />
        <Route path="merchendisedetails" element={ <MerchendiseDetails/> } />
        <Route path="finaldetails" element={ <FinalDetails/> } />
        <Route path="success" element={ <Success/> } />
        <Route path="dashboard" element={ <Dashboard/> } />


        {/* <Route path="payment" element={ <Payment/> } />
        <Route path="uploadphotos" element={ <UploadPhotos/> } />
        <Route path="playerstatus" element={ <PlayerStatus/> } /> */}

      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;