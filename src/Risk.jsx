import React,{useState} from 'react';
import Navb from "./Navb";
import './Risk.css';
import { useNavigate} from 'react-router-dom'
import Footer from './Footer';
import Marquee from './Marquee';


const Risk = () => {
    const[age,setAge] = useState('');
    const[salary,setSalary] = useState('');
    const[occupation,setOccupation] = useState('');
    const[risklevel,setRisklevel] = useState('');
  
    const occupations = ['Student','Salaried Employee','Self Employed','Non-salaried individual'];
  
    const calculaterisk =()=>{
      if(!age || !salary || !occupation){
        alert('Please fill in all fields');
        return;
      }
  
  
      const ageNum = parseInt(age);
      const salaryNum = parseInt(salary);
  
      let risk ='';
  
      // Risk assessment logic
      if(salaryNum > 50000){
        risk = 'High Risk'
      } else if (salaryNum >= 25999 && salaryNum <= 49999) {
        risk = 'Medium Risk';
      }else if (salaryNum < 25000) {
        risk = 'Low Risk';
      } else {
        risk = 'No Risk';
      }
  
      setRisklevel(risk);
    };
  
      const handleOccupationChange =(e)=>{
      setOccupation(e.target.value);
    };
        

    // Navigate
    const navigate = useNavigate();

  const handleRedirect1 = () => {
    navigate('/low'); // Redirect to the Low Risk
  };

  const handleRedirect2 = () => {
    navigate('/medium'); // Redirect to the Medium Risk
  };

  const handleRedirect3 = () => {
    navigate('/high'); // Redirect to the High Risk
  };

    
    return (
      <>
      <Navb/>
      <Marquee/>
      <div className='app'>
      <div >
        <b><p style={{fontSize:'35px'}}>Calculate your risk:</p></b>
        <div className='d'>
          <label>
            <b>Age:</b>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} style={{marginLeft:'28px'}} />
          </label>
        </div>
  
        <div className='d'>
          <label>
            <b>Salary:</b>
            <input type='number' value={salary} onChange={(e)=>setSalary(e.target.value)} style={{marginLeft:'10px'}}/>
          </label>
        </div>
  
        <div className='d'>
          <label>
            <b>Occupation:</b>
            <select value={occupation} onChange={handleOccupationChange} style={{marginLeft:'15px'}}>
              <option value="">Select occupation</option>
              {occupations.map((occ)=>(
                <option key={occ} value={occ}>
                  {occ}
                </option>
              ))}
            </select>
          </label>
        </div>
  
        <div className='d'>
          <label>
            <b>Selected Occupation:</b>
            <input type='text' value={occupation} readOnly style={{border: 'none', marginLeft:'15px', fontSize:'15px', width:'200px'}} />
          </label>
        </div>
  
        <button id='btn' className='button' onClick={calculaterisk} style={{marginLeft:'80px', marginTop:'10px'}}>Assess Risk</button>
        {risklevel && <h2 style={{marginLeft:'40px'}}>Risk level: &nbsp; {risklevel}</h2>}
        
      </div> 
        </div> 

        

        <div className="plan">
        <button onClick={handleRedirect1} id="button1" className='button'><b>Low Risk Plan</b></button>
        <button onClick={handleRedirect2} id="button2" className='button'><b>Medium Risk Plan</b></button>
        <button onClick={handleRedirect3} id="button3" className='button'><b>High Risk Plan</b></button>
        </div>

        <Footer />
      </>
    );
}

export default Risk


