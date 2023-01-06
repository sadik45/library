import React from "react";

const Loading= (props)=>{
    return(
        <div
         style={{
            width:"100wh",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
         }}>
    <div
    
    
    className="text-center">
  <div style={{width:"50px", height:"50px"}} className="spinner-border" role="status">
    <span  className="visually-hidden">Loading...</span>
  </div>
    </div>
        </div>

    )
}
export default Loading;