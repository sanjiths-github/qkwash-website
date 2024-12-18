
import './App.css';
import Login from './pages/Login';
import { Route, Router, Routes } from "react-router-dom";
import OtpVerification from './pages/OtpVerification';

import Home from './pages/Home';
import Qrcodescan from './pages/Qrcodescan';

import RunningJob from './pages/RunningJob';
import Profile from './pages/Profile';
import Reward from './pages/Reward';
import History from './pages/History';
import Notification from './pages/Notification';
import HubList from './pages/HubList';
import PaymentPage from './pages/PaymentPage';
import PaymentDetail from './pages/PaymentDetail';


function App() {
  return (
<div >
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp-verification" element={<OtpVerification/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/qrcode-scanner" element={<Qrcodescan/>} />
    
      <Route path='/running-jobs' element={<RunningJob/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/reward' element={<Reward/>} />
      <Route path='/History' element={<History/>} />
      <Route path='/Notification' element={<Notification/>} />
      <Route path='/Hub-details' element={<HubList/>} />
      <Route path='/payment' element={<PaymentPage/>} />
      <Route path='/payment-detail' element={<PaymentDetail/>} />


    </Routes>



    </div>

  
  );
}

export default App;
