import React from "react";
import { NavLink} from "react-router-dom";
const Navbar =() =>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <a className="navbar-brand" href="/">CRUD OPERATIONS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        
        <div className= "collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto" role="tablist">
            <li className="nav-item active">
              <NavLink className="nav-link active" aria-current="page"  data-bs-toggle="pill"  to="/">Home </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" aria-current="page" to="/course">Course </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" aria-current="page" to="/students"> Students</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" aria-current="page" to="/payment"> Payment</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" aria-current="page" to="/report">Report </NavLink>
            </li>
           
           
            
          </ul>
          
        </div>
      </nav>
     
      



    )
}

export default Navbar;