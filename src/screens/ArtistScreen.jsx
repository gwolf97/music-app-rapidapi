import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getArtistDetails } from "../actions/actions"
import ArtistDetails from '../components/ArtistDetails'
import ArtistTopSongs from '../components/ArtistTopSongs'


const ArtistScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {artist, loading, success} = useSelector((state) => state.artistDetails)


    React.useEffect(() => {
        dispatch(getArtistDetails(params.id))
    },[params])

  return (
    <>
    <div className="song-screen-container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div className="details-div">
                {!loading && success && (
                                <ArtistDetails artist={artist} artistId={params.id}/>
                            )}
        </div>
        <ul className="related-songs-container" style={{marginTop:"250px", width:"100%", display:"flex", flexDirection:"column", justifyContent:"start" }}>
             {!loading && success && (
                <ArtistTopSongs artist={artist} />
             )}
        </ul>
    </div>
    </>
  )
}

export default ArtistScreen