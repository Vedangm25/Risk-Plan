import React from 'react'
import img from './assets/logo.png'
import Navb from './Navb'
import Footer from './Footer'


const Contact = () => {
  return (
    <div className='contact' >
        <Navb/>
        <h1 style={{fontSize:'35px',textAlign:'center'}}>Contact Us</h1>
        
        <div className="container" style={{display:'flex'}}>
        <div style={{marginLeft:'70px', marginBottom:'140px'}}>
          <div style={{display:'flex'}}>
          <img src={img} style={{height:'50px', width:'50px'}}/>  
          <i style={{marginTop:'50px', fontSize:'25px', fontStyle:'italic'}}>Investopedia®</i>
          </div>
          <p><b>Street:</b>&nbsp;&nbsp; 142/46, S V Road, Opp Excel Industries, Jogeshwari(W)</p>
          <p><b>City:</b>&nbsp;&nbsp;Mumbai</p>
          <p><b>State:</b>&nbsp;&nbsp; Maharashtra</p>
          <p><b>Contact No:</b> &nbsp;&nbsp;+91 9874123650</p>
          <p><b>Email :</b> &nbsp;&nbsp;Investopedia@gmail.com</p>
          <p><b>Pincode:</b>&nbsp;&nbsp;400018</p>
          <p><b>Country:</b>&nbsp;&nbsp;India</p>
        </div>

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38344.961411518896!2d72.8832032325495!3d19.071616133767936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743680357207!5m2!1sen!2sin" 
        style={{width:"600px",height:"450px",marginLeft:'80px', borderRadius:'10px',borderStyle:'solid'}}></iframe>
        </div>
        </div>

        <p style={{textAlign:'center',fontSize:'20px'}}>Thanks for visiting our website.</p>
        <Footer/>
    </div>
  )
}

export default Contact
