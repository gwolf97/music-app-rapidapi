import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../actions/actions"
import SongDetails from "../components/SongDetails"

const SongScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {song, loading, success} = useSelector(state => state.track)

    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[params])


  return (
    <>
    <div className="song-details-div">
            {!loading && success && (
                            <SongDetails song={song}/>
                        )}
    </div>
                
    </>
  )
}

export default SongScreen