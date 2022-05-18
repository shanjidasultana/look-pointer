import './App.css';
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddEvent from './Pages/Dashboard/AddEvent/AddEvent';
import BookingEvents from './Pages/Dashboard/BookingEvents/BookingEvents';
// import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllBookings from './Pages/Dashboard/ManageAllBookings/ManageAllBookings';
import MangeAllEvents from './Pages/Dashboard/ManageAllEvents/MangeAllEvents';
import Payment from './Pages/Dashboard/Payment/Payment';
// import Booking from './Pages/Booking/Booking';
import Photos from './Pages/Photos/Photos';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
     <AuthProvider> 
      <Router>
        <Routes>
        <Route path={`/dashboard/addEvent`} element={<AddEvent/>}></Route>
        <Route path={`/dashboard/bookingevents`} element={<BookingEvents/>}></Route>
        <Route path={`/dashboard/makeadmin`} element={<MakeAdmin/>}></Route>
        <Route path={`/dashboard/manageallevents`} element={<MangeAllEvents/>}></Route>
        <Route path={`/dashboard/manageallbookings`} element={<ManageAllBookings/>}></Route>
        <Route path={`/dashboard/payment`} element={<Payment/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          {/* <Route path="/booking" element={<Booking/>}></Route> */}
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/gallery" element={<Photos/>}></Route>
          <Route exact path="*" element={<NotFound/>}></Route>
          
        </Routes>
      </Router>     
      </AuthProvider> 
 
     
    </div>
  );
}

export default App;
