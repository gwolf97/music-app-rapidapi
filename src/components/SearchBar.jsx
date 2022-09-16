import React from 'react'
import { Input } from '@mui/material'

const SearchBar = ({handleToggle}) => {
  return (
    <>
        <Input 
        startAdornment={(
        <i 
            style={{
                color:"#9ca4b0", 
                margin:"0 10px 0 10px", 
                fontSize:"20px", 
                opacity:"0.6"}} 
            className="fa-solid fa-magnifying-glass"
            onClick={() => handleToggle}
            >
        </i>)} 

        sx={{border:"none"}} 
        placeholder="Search" 
        disableUnderline 
        id="standard-basic" 
        variant="standard" 
        style={{
            width:"100%", 
            minHeight:"50px", 
            color:"#fefefe", 
            fontFamily:"Poppins, sans-serif", 
            fontWeight:"700", 
            fontSize:"20px"}} />
    </>

  )
}

export default SearchBar