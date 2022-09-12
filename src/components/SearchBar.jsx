import React from 'react'
import { Input } from '@mui/material'

const SearchBar = () => {
  return (
    <>
        <Input startAdornment={(<i style={{color:"#9ca4b0", margin:"0 10px 0 10px", fontSize:"20px", opacity:"0.6"}} className="fa-solid fa-magnifying-glass"></i>)} sx={{border:"none"}} placeholder="Search" disableUnderline id="standard-basic" variant="standard" style={{width:"100%", height:"100%", color:"#fefefe", fontFamily:"Poppins, sans-serif", fontWeight:"700", fontSize:"20px"}} />
    </>

  )
}

export default SearchBar