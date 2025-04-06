import React from 'react'
import { NavLink} from 'react-router-dom'
import './index.css'
import './Navb.css'
import img from './assets/logo.png';



const Navb = () => {

  const box ={listStyleType:'none', 
              display:'flex', 
              flexDirection:'row-reverse',  
            }


  return (
    <>
    
        <div className="main" >
          <div style={{height:'40px'}}>
            <h1 style={{marginLeft:'15px',fontFamily:'Abel', display:'inline'}}>
              <img src={img} style={{height:'40px',width:'40px'}}/>
              <i>Investopedia®</i></h1> 
          </div>
          <div>
          <nav>
            <ul style={box}>
                <li style={{right:'50px'}}>
                <NavLink to="/" style={{textDecoration:"none", fontSize:'20px', marginRight:'30px'}} className='link'>
                <b id='nav'>Home</b></NavLink>
                <NavLink to="/risk" style={{textDecoration:"none", fontSize:'20px', marginRight:'30px'}} className='link'>
                <b id='nav'>Assessment</b></NavLink>
                <NavLink to="/contact" style={{textDecoration:"none", fontSize:'2px', marginRight:'30px'}} className='link'>
                <b id='nav'>Contact Us</b></NavLink>
                </li>
            </ul>
        </nav>
          </div>
        </div> 
      <hr style={{scale:'1px'}}/>
      
    </>
  )
}

export default Navb
