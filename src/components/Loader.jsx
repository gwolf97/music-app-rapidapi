import React from 'react'
import {SpinnerDotted} from "spinners-react"
import {DisappearedLoading} from "react-loadinggg"

const Loader = ({wave}) => {
  return (
    <div className="loading-div">
        {wave ? <DisappearedLoading color={"#fefefe"} size={"large"}/> : <SpinnerDotted color={"#fefefe"} size={100}/> }
    </div>
  )
}

export default Loader