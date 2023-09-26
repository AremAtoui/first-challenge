import React from 'react'
import { AiTwotoneThunderbolt} from "react-icons/ai";
import { GrMemory} from "react-icons/gr";
import { BiMessageRoundedMinus} from "react-icons/bi";
import { BsEye} from "react-icons/bs";
function Challenge() {
  return (
    <div className="Big">
       <div className="Ap1">
      <h4> Your Result</h4> 
  <h6 className="Img"> <h2>76 </h2><h5>of 100</h5></h6> 
   <strong><h3> Great</h3></strong>
   <p>You scored higher than 65% of the people who have taken these tests.</p>
   </div>
   {/* style={{backgroundColor:"hsl(0, 100%, 67%)", height: "50px", paddingTop: "16px",
    borderRadius: "5px"}} */}
   <div className="Ap11">
      <h4 style={{color:"black", marginLeft
   :"-150px"}}>   Summary</h4> 
   <div className="Laa">
 <div className="Aa" style={{background:"#f1d2d2"}}> 
 <p  style={{color:"red", display:"flex"}}>  <AiTwotoneThunderbolt className="a01" ></AiTwotoneThunderbolt> Reaction </p>    
        <p><i style={{fontWeight:"30px", color:"black", fontSize:"23px"}}> 80 </i> / 100</p>
 </div>
 <div className="Aa" style={{background:"rgb(255 176 31 / 31%)"}}> 
    <p  style={{color:"hsl(39, 100%, 56%)", display:"flex"}}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>  Memory</p><p> <i style={{fontWeight:"30px", color:"black", fontSize:"23px"}}>92</i> <i style={{color:"#e7e5e5c"}}>/ 100</i></p>
 </div>
 <div className="Aa" style={{background:"rgb(31 255 205 / 11%)"}}> 
    <p style={{color:"hsl(166, 100%, 37%)", display:"flex"}}> <BiMessageRoundedMinus className="a03" ></BiMessageRoundedMinus> Verbal</p><p>  <i style={{fontWeight:"30px", color:"black", fontSize:"23px"}}>61</i> / 100</p>
 </div>
 <div className="Aa" style={{background:"hsl(234deg 61.68% 73.67%)"}}> 
    <p style={{color:"hsl(234, 85%, 45%)", display:"flex"}}> <BsEye className="a04"></BsEye> Visual</p><p> <i style={{fontWeight:"30px", color:"black", fontSize:"23px"}}> 72 </i> / 100</p>
 </div>
 </div>
<button className="aa">Continue</button>
   </div>




    </div>
  )
}

export default Challenge