import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"
import SongDetails from "../components/SongDetails"
import RelatedSongs from '../components/RelatedSongs'
import Fade from 'react-reveal/Fade'
import {DisappearedLoading} from "react-loadinggg"

const SongScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {song, loading, success} = useSelector(state => state.track)


    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[params])


  return (
    <>
    {!loading && success ? (
      <div className="song-screen-container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>        
                {!loading && success && (
                <Fade bottom>
                     <div className="details-div">
                                <SongDetails song={song}/>
                     </div>
                </Fade>
                            )}
        <ul className="related-songs-container" style={{marginTop:"250px", width:"100%", display:"flex", flexDirection:"column", justifyContent:"start" }}>
             {!loading && success && (
                <Fade left>
                    <RelatedSongs songKey={song.key} />
                </Fade>
             )}
        </ul>
    </div>
    ) : (
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <DisappearedLoading color={"#fefefe"} size={"large"}/> 
    </div>
    )}
    </>
  )
}

export default SongScreen