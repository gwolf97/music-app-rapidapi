import React from 'react'

const AsideLoader = () => {

const array = [1,2,3,4,5]

  return (
    <>
        {array.map(key =>(
        <li key={key} className="track-list-item aside-loader-li">
            <div className='aside-loader-img-div' >
                <div className="aside-loader-img-child-div"></div>
            </div>
            <div className='aside-loader-titles-div'>
                <div className='aside-loader-title-one'></div>
                <div className='aside-loader-title-two'></div>
                <div></div>
            </div>
        </li>
        ))}
    </> 
  )
}

export default AsideLoader