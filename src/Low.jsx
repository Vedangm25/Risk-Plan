// src/HighRiskInvestments.js
import React from 'react';
import './High.css';
import Footer from './Footer';
import Navb from './Navb';
import { useNavigate } from 'react-router-dom';

const investmentOptions = [
  {
    title: "High-Yield Savings Accounts",
    riskLevel: "Low",
    returns: "3-5% annually (varies by bank and economic conditions)",
    pros: "FDIC-insured (up to $250,000), highly liquid",
    cons: "Lower returns compared to stocks or real estate",
    img : "https://media.istockphoto.com/id/1422985058/photo/yield-and-interest-rates-moves-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=_d3AvSepWTUdD5Z_olAccRCpwfzi6wOV2UDwjOzqNTw="
  },
  {
    title: "Certificates of Deposit (CDs)",
    riskLevel: "Very Low",
    returns: "FDIC-insured, fixed interest rates",
    pros: "High potential returns, decentralized assets",
    cons: "Locked funds until maturity (penalty for early withdrawal)",
    img : "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVwb3NpdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Government Bonds (U.S. Treasury Bonds, TIPS, or I-Bonds)",
    riskLevel: "Very Low",
    returns: "3-7% depending on type and market conditions",
    pros: "Backed by the government, stable returns",
    cons: "Lower liquidity for long-term bonds",
    img: "https://media.istockphoto.com/id/1351061812/photo/concept-of-gold-bond-showing-with-gold-bars-and-bod-paper-with-stock-market-graphs-or-charts.webp?a=1&b=1&s=612x612&w=0&k=20&c=enCzfy5MFQpjcz82HQXAGdIOv7rxpFhEir2Dxyk4tjA="
  },
  {
    title: "Money Market Funds",
    riskLevel: "Low",
    returns: "3-5 %",
    pros: "Higher returns than savings accounts, low volatility",
    cons: "Not FDIC-insured, small risk of value fluctuations",
    img : "https://media.istockphoto.com/id/1503371245/photo/percentage-sign-on-top-of-coin-stacks-before-blue-financial-graph.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lev4DpoENvXEneIfVdv7KwVeVi2_Ws5xJCUdDHKOi0o="
  },
  {
    title: " Dividend-Paying Blue-Chip Stocks or ETFs",
    riskLevel: "Moderate (depends on the stock market)",
    returns: "6-8% (including dividends)",
    pros: "Passive income through dividends, potential for capital appreciation",
    cons: "Stock prices can fluctuate, though blue-chip stocks are more stable",
    img: "https://media.istockphoto.com/id/1868619116/photo/etf-exchange-traded-fund-stock-market-business-finance-investment-concept-interest.webp?a=1&b=1&s=612x612&w=0&k=20&c=-clp7IXs_WR5ZVNsiq9v4WIMK6kxnwASehRAS9MZ5Q8="
  },
];

const Low = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(-1); // Redirect to the Low Risk
  };

  return (
    <div  >
      <Navb/>
      <div style={{marginLeft:'5%'}}>
      <h1>Low-Risk Investment Options</h1>
      <p>If you're looking for low-risk investment options with the potential for higher returns, here are five choices:</p>
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
            <p><strong>Risk Level:</strong><span style={{color: 'green', fontWeight:'bold'}}>&nbsp;&nbsp;{investment.riskLevel}</span></p>
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

export default Low;