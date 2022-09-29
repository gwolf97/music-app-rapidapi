import React from 'react'
import {SpinnerDotted} from "spinners-react"


const Loader = () => {
  return (
    <div className="loading-div">
        <SpinnerDotted color={"#fefefe"} size={100}/> 
    </div>
  )
}

export default Loader