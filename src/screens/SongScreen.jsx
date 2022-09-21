import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"
import SongDetails from "../components/SongDetails"
import RelatedSongs from '../components/RelatedSongs'

const SongScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {song, loading, success} = useSelector(state => state.track)

    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[params])


  return (
    <>
    <div className="song-screen-container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div className="details-div">
                {!loading && success && (
                                <SongDetails song={song}/>
                            )}
        </div>
        <ul className="related-songs-container" style={{marginTop:"250px", width:"100%", display:"flex", flexDirection:"column", justifyContent:"start" }}>
             {!loading && success && (
                <RelatedSongs songKey={song.key} />
             )}
        </ul>
    </div>

    </>
  )
}

export default SongScreen