import { useState } from 'react';
import './App.css';

function App() {
  const [buyingPrice, setBuyingPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [currentPrice, setCurrentPrice] = useState("")
  const [output, setOutput] = useState()


  const validate=()=>{
   
    return buyingPrice && quantity && currentPrice
  }


     
    const handleSubmit=()=>{
      calculateProfitLoss()
      
    }
    
    const calculateProfitLoss=()=>{
      let totalValue = buyingPrice * quantity
      let currTotal = currentPrice * quantity
      let diff = currTotal - totalValue
      if(diff<0){
        let lossPercentage = (Math.abs(diff) * 100)/ totalValue
        setOutput(()=>{
          return (
            <div>
              <span>You're losing </span>
              <span style={{color:"red", fontWeight:"bold", fontSize:"24px"}}>
                {Math.abs(diff)} 
              </span>
              <span> and the percent is </span>
              <span style={{color:"red"}}> 
                {lossPercentage}%
              </span>
            </div>
          )
        
      })
    }
      else{
        
        let profitPercentage = (diff*100) / totalValue
        setOutput(()=>{
          return (
            <div>
              <span>You're gaining </span>
              <span style={{color:"green", fontWeight:"bold", fontSize:"24px"}}>
                {Math.abs(diff)} 
              </span>
              <span> and the percent is </span>
              <span style={{color:"green", fontWeight:"bold", fontSize:"24px"}}> 
                {profitPercentage}%
              </span>
            </div>
          )
        
      })
      }
    }
    
    
  return (
    <>
   
      <h1>Stock Profit Loss Calculator</h1>
      <form className='inputForm'>
        <label htmlFor='buying-price'>Buying Price of a stock</label><br />
        <input id='buying-price' type='number' onChange={(e)=>setBuyingPrice(e.target.value)} required/><br />
        <label htmlFor='quantity'>Number of stocks bought</label><br/>
        <input id='quantity' type='number' onChange={(e)=>setQuantity(e.target.value)} required /><br />
        <label htmlFor='current-price'>Current Price of the stock</label><br />
        <input id='current-price' type='number' onChange={(e)=>setCurrentPrice(e.target.value)} required/><br/>
      </form>
        <button type='submit' onClick={()=>handleSubmit()}  disabled={!validate()} >Tell Me</button><br />
        <div className='output' >
          {output}
          </div>
    </>
  );
}

export default App;
