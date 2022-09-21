import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"
import SongDetails from "../components/SongDetails"
import RelatedSongs from '../components/RelatedSongs'

const ArtistScreen = () => {



  return (
    <>
    <div className="song-screen-container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div className="song-details-div">
                artist details
        </div>
    </div>
    </>
  )
}

export default ArtistScreen