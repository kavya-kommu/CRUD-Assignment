import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from "./component/pages/Home";
import Students from "./component/pages/Students";
import Payment from "./component/pages/Payment";
import Report from "./component/pages/Report";
import Course from "./component/pages/Course";
import Navbar from "./component/Layout/Navbar";
import AddStudents from "./component/students/AddStudents"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
   return (
      <Router>

         <div className="App">
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home/>}></Route>
               <Route exact path="/students" element={<Students/>}></Route>
               <Route exact path="/payment" element={<Payment/>}></Route>
               <Route exact path="/report" element={<Report/>}></Route>
               <Route exact path="/course" element={<Course/>}></Route>
               <Route exact path="/students/add" element={<AddStudents/>}></Route>
            </Routes>
         </div>
      </Router>
   );
}

export default App;