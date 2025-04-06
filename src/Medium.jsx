// src/HighRiskInvestments.js
import React from 'react';
import './High.css';
import Footer from './Footer';
import Navb from './Navb';
import { useNavigate } from 'react-router-dom';

const investmentOptions = [
  {
    title: "Index Funds & ETFs (Exchange-Traded Funds)",
    riskLevel: "Medium",
    returns: "7-12% annually (historically, S&P 500 averages ~10%)",
    pros: "Diversified, low fees, long-term growth potential",
    cons: "Market fluctuations can impact short-term value",
    img : "https://media.istockphoto.com/id/2192707886/photo/etf-analyst-meticulously-analyzes-market-data-constructing-intricate-graphs-and-comparing.jpg?s=612x612&w=0&k=20&c=tIKvkruUawXM0NDVu52GTVQZQ4U0oxN2mWFgQvPtRIY="
  },
  {
    title: "Corporate Bonds (Investment-Grade Bonds)",
    riskLevel: "Medium",
    returns: "4-8% annually",
    pros: "More stable than stocks, regular interest payments",
    cons: "Credit risk (if a company defaults), lower liquidity than stocks",
    img : "https://media.istockphoto.com/id/1390587641/photo/businessman-clicks-a-bonds-virtual-screen-bond-finance-banking-technology-concept-trade.jpg?s=612x612&w=0&k=20&c=JpC2lovLBdvojgmVHxe60LiemsfBUaS-S8k46V6f8Ns="
  },
  {
    title: "REITs (Real Estate Investment Trusts)",
    riskLevel: "Medium",
    returns: "6-12% annually (varies by real estate market)",
    pros: "Passive income through dividends, real estate exposure without owning property",
    cons: "Market-dependent, interest rate-sensitive",
    img: "https://media.istockphoto.com/id/2161361508/photo/market-graph-on-residential-building-background-real-estate-index-rising-prices-for-purchase.jpg?s=612x612&w=0&k=20&c=dwHdvmFRX_grb68bcHoA_OyPBjefQHi-f4HrSyB4GpY="
  },
  {
    title: "Peer-to-Peer (P2P) Lending",
    riskLevel: "Medium",
    returns: "5-12% annually (depends on borrower credit quality)",
    pros: "Higher interest rates than traditional bonds or savings accounts",
    cons: "Risk of borrower default, less liquidity",
    img : "https://media.istockphoto.com/id/1264424135/photo/p2p-communication-line-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=J1F7b9RYYkW1GGrLQSehcRCEoR9zGJXlDfJPYfaKoxw="
  },
  {
    title: "Dividend Growth Stocks",
    riskLevel: "Medium",
    returns: "6-10% annually (dividends + capital appreciation)",
    pros: "Regular income, stable companies with strong growth potential",
    cons: "Market fluctuations, dividends are not guaranteed",
    img: "https://media.istockphoto.com/id/1849014268/photo/ai-helping-predict-posibility-in-high-frequency-trading-robot-trade-in-crypto-stockmarket.jpg?s=612x612&w=0&k=20&c=1j6la9Kf3tHBooUNHeM9_euNlkzoEVzgcn0V8OOAZ9g="
  },
];

const Medium = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(-1); // Redirect to the Low Risk
  };

  return (
    <div  >
      <Navb/>
      <div style={{marginLeft:'5%'}}>
      <h1>Medium-Risk Investment Options</h1>
      <p>If you're looking for medium-risk investment options with the potential for higher returns, here are five choices:</p>
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
            <p><strong>Risk Level:</strong><span style={{color: 'blue', fontWeight:'bold'}}>&nbsp;&nbsp;{investment.riskLevel}</span></p>
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

export default Medium;