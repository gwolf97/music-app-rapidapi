import React from 'react'
import { Select, MenuItem } from '@mui/material'

const SelectGenre = ({handleSelectedGenere, selected}) => {
  return (
    <Select
    value={selected}
    onChange={(e) => handleSelectedGenere(e.target.value)}
    style={{
        width:"200px", 
        height:"35px", 
        backgroundColor:"#191624", 
        color:"#fefefe"}}
    defaultValue="POP"
    MenuProps={{
        style:{ height:"300px"}, 
        MenuListProps:{
            style:{backgroundColor:"#191624", color:"#fefefe"}
            }}}
>
    <MenuItem value="POP">POP</MenuItem>
    <MenuItem value="HIP_HOP_RAP">HIP_HOP_RAP</MenuItem>
    <MenuItem value="DANCE">DANCE</MenuItem>
    <MenuItem value="ELECTRONIC">ELECTRONIC</MenuItem>
    <MenuItem value="SOUL_RNB">SOUL_RNB</MenuItem>
    <MenuItem value="ALTERNATIVE">ALTERNATIVE</MenuItem>
    <MenuItem value="ROCK">ROCK</MenuItem>
    <MenuItem value="LATIN">LATIN</MenuItem>
    <MenuItem value="FILM_TV">FILM_TV</MenuItem>
    <MenuItem value="COUNTRY">COUNTRY</MenuItem>
    <MenuItem value="AFRO_BEATS">AFRO_BEATS</MenuItem>
    <MenuItem value="WORLDWIDE">WORLDWIDE</MenuItem>
    <MenuItem value="REGGAE_DANCE_HALL">REGGAE_DANCE_HALL</MenuItem>
    <MenuItem value="HOUSE">HOUSE</MenuItem>
    <MenuItem value="K_POP">K_POP</MenuItem>
    <MenuItem value="FRENCH_POP">FRENCH_POP</MenuItem>
    <MenuItem value="SINGER_SONGWRITER">SINGER_SONGWRITER</MenuItem>
    <MenuItem value="REG_MEXICO">REG_MEXICO</MenuItem>

</Select>
  )
}

export default SelectGenre