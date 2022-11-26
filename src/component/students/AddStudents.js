import React from "react";

const AddStudents =() =>{
    return(
        <div className ="container"> 
            <h1>Add/Edit Student</h1><br></br>
            
            <br></br>
        <form>
         <div className="col-xs-2 container">
          <label htmlFor="inputlg">Name</label>
          <input type="text" className="form-control" size={15} id="exampleInputEmail1" />
           
        </div>
        <br></br>
        <div className="container">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1"  />
        </div><br></br>
        <div className="container">
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input type="telephone" className="form-control" id="exampleInputPassword1"  />
        </div><br></br>
        <div className="container">
          <label htmlFor="exampleInputPassword1">Enroll NUmber</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div><br></br>
        <div className="container">
          <label htmlFor="exampleInputPassword1">Date Of Admission</label>
          <input type="date" className="form-control" id="exampleInputPassword1"  />
        </div>
        <br></br>
        
        <center><button type="submit" className="btn btn-warning">Submit</button></center>
      </form>
       </div>
           
    )
}

export default AddStudents;