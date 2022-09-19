import axios from "axios"
import { Typography, Avatar } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"

const SongScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {song} = useSelector(state => state.track)

    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[])

    const handlePlay = () => {
        console.log("play")
    }

    console.log(song)

  return (
    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"95px", width:"100%"}}>

    </div>
  )
}

export default SongScreen