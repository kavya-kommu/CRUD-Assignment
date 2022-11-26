import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Students =() =>{
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        console.log("My Channel");

    },[]);
    return(
        <div className ="container"> 
            <h2>Students list </h2><br></br>
            <Link className="btn btn-outline-warning float-right" to="/students/add">ADD NEW STUDENT</Link>
            <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Enroll Number</th>
            <th scope="col">Date Of Admission</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
          <th scope="row">3</th>
          <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
          <th scope="row">4</th>
          <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
          <th scope="row">5</th>
          <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
          <th scope="row">6</th>
          <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
          <th scope="row">7</th>
          <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          <tr>
          <th scope="row">8</th>
          <td>kavya</td>
            <td>kavya@gmail.com</td>
            <td>97873426344</td>
            <td>264836</td>
            <td>08-02-2020</td>
            <td>
                <Link className="btn btn-warning m-1"><i className="fa-solid fa-pen" /></Link>
                <Link className="btn btn-warning m-1"> <i className="fa-solid fa-trash" /></Link>
            </td>
          </tr>
          
        </tbody>
      </table>
        </div>
    )
}

export default Students;