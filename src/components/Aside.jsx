import React from 'react'

const Aside = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"12px 10px 0 10px"}}>
        <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Charts</h3>
        <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>See More</p>
    </div>
    <div style={{border:"1px solid black", width:"100%", height:"500px"}}>

    </div>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", padding:"12px 10px 0 10px"}}>
        <h3 style={{ color:"#fefefe", fontSize:"22px", fontFamily:"sans-serif", fontWeight:"900"}}>Top Artists</h3>
        <p style={{color:"#fefefe", fontSize:"13px", fontFamily:"sans-serif", fontWeight:"700"}}>See More</p>
    </div>
    <div style={{border:"1px solid black", width:"100%", height:"122px"}}>

    </div>
    </>
  )
}

export default Aside