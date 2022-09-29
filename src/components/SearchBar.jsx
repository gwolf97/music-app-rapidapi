import React from 'react'
import { Input } from '@mui/material'
import { useDispatch } from 'react-redux'
import { search } from '../actions/actions'
import { useNavigate, useParams } from 'react-router-dom'

const SearchBar = () => {

  const [query, setQuery] = React.useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  React.useEffect(() =>{
    setQuery("")
  },[navigate, params])

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${query}`)
      setQuery("")
    }
  }

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
            >
        </i>)} 

        value={query}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e)}
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