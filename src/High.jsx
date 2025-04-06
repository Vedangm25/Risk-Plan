// src/HighRiskInvestments.js
import React from 'react';
import './High.css';
import Footer from './Footer';
import Navb from './Navb';
import { useNavigate } from 'react-router-dom';

const investmentOptions = [
  {
    title: "Individual Stocks (Growth & Tech Stocks)",
    riskLevel: "High",
    returns: "10-30%+ (potentially, but highly volatile)",
    pros: "High growth potential, possible massive gains",
    cons: "Market swings, company-specific risks",
    img : "https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.webp?a=1&b=1&s=612x612&w=0&k=20&c=mLzrxqQ-VRXhrugPzh2sHnFh3ePowEJjLueZyvrrT3Q="
  },
  {
    title: "Cryptocurrency (Bitcoin, Ethereum, Altcoins)",
    riskLevel: "Very High",
    returns: "20-100%+ (but highly volatile)",
    pros: "High potential returns, decentralized assets",
    cons: "Extreme volatility, regulatory uncertainty, security risks",
    img : "https://images.unsplash.com/photo-1631897642056-97a7abff6818?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww"
  },
  {
    title: "Startups & Venture Capital (Angel Investing)",
    riskLevel: "Very High",
    returns: "50-1000%+ (if successful)",
    pros: "Potential for massive returns, equity in growing companies",
    cons: "High failure rate, long investment horizon",
    img: "https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RhcnR1cHMlMjB2ZW50dXJlJTIwY2FwaXRhbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Leveraged ETFs & Options Trading",
    riskLevel: "Very High",
    returns: "50%+ (or total loss)",
    pros: "High reward potential, short-term gains possible",
    cons: "Complex strategies, high chance of losing entire investment",
    img : "https://media.istockphoto.com/id/1322205516/photo/digitally-enhanced-shot-of-a-handsome-businessman-using-a-laptop-superimposed-over-a-graph.webp?a=1&b=1&s=612x612&w=0&k=20&c=V2XZgGO_MODoFgS8YtWfkymSpB_CDM8G7qsCepFrdlI="
  },
  {
    title: "Foreign Emerging Markets & Forex Trading",
    riskLevel: "High",
    returns: "10-50%+ (varies with currency and economic conditions)",
    pros: "Growth potential in developing economies, currency trading opportunities",
    cons: "Political instability, currency fluctuations, economic risks",
    img: "https://media.istockphoto.com/id/965916494/photo/panoramic-view-urban-cityscape-singapore-with-investment-theme-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=c0uEFAa5ceiONpmMOmhl_sfSBOMzp3HSZOjClOaZdbg="
  },
];

const High = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(-1); // Redirect to the Low Risk
  };

  return (
    <div  >
      <Navb/>
      <div style={{marginLeft:'5%'}}>
      <h1>High-Risk Investment Options</h1>
      <p>If you're looking for high-risk investment options with the potential for higher returns, here are five choices:</p>
      </div>
      
      <ul className="cls">
        <div className="container" > 
          <div style={{marginLeft:'40px'}}>
          {investmentOptions.map((investment, index) => (
          <div className="box">
            <div className="flx">
              <img src={investment.img}  />
            </div>
            <div className="lnk">
            <li key={index} >
            <h2>{investment.title}</h2>
            <p><strong>Risk Level:</strong><span style={{color: 'red', fontWeight:'bold'}}>&nbsp;&nbsp;{investment.riskLevel}</span></p>
            <p><strong>Potential Returns:</strong> &nbsp;{investment.returns}</p>
            <p><strong>Pros:</strong> &nbsp;{investment.pros}</p>
            <p><strong>Cons:</strong> &nbsp;{investment.cons}</p>
            <hr />
          </li>
            </div>
          </div>
        ))}
          </div>
        </div>
      </ul>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={handleRedirect} id="button1" className='button' style={{width:'50px',backgroundColor:'#88c9f5'}}><b style={{marginLeft:'-20px'}}>Back</b></button>
      </div>

      <Footer/>
    </div>
  );
};

export default High;