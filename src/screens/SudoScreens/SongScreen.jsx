import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getTrack } from "../../actions/actions"
import SongDetails from "../../components/SongDetails"
import RelatedSongs from '../../components/RelatedSongs'
import Fade from 'react-reveal/Fade'
import Loader from "../../components/Loader"

const SongScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {song, loading, success} = useSelector(state => state.track)

    React.useEffect(() => {
        dispatch(getTrack(params.key))
    },[dispatch, params])


  return (
    <>
    {!loading && success ? (
      <div className="song-screen-container">        
                {!loading && success && (
                <Fade bottom>
                  <div className="song-details-div">
                      <SongDetails song={song}/>
                  </div>
                </Fade>
                            )}
        <ul className="related-songs-container">
             {!loading && success && (
                <Fade left>
                    <RelatedSongs songKey={song.key} />
                </Fade>
             )}
        </ul>
    </div>
    ) : (<Loader wave={true}/>)}
    </>
  )
}

export default SongScreen