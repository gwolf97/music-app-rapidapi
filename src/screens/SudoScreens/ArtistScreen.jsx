import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getArtistDetails } from "../../actions/actions"
import ArtistDetails from '../../components/ArtistDetails'
import ArtistTopSongs from '../../components/ArtistTopSongs'
import Fade from "react-reveal/Fade"
import Loader from "../../components/Loader"


const ArtistScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const {artist, loading, success} = useSelector((state) => state.artistDetails)


    React.useEffect(() => {
        dispatch(getArtistDetails(params.id))
    },[dispatch,params])

  return (
    <>
    {!loading && success ? (
    <div className="artist-screen-container">
                {!loading && success && (
                    <Fade bottom>
                        <div className="details-div">
                            <ArtistDetails artist={artist} artistId={params.id}/>
                        </div>
                    </Fade>
                            )}
        <ul className="artist-top-songs-container">
             {!loading && success && (
                <Fade bottom>
                    <ArtistTopSongs artist={artist} />
                </Fade>
             )}
        </ul>
    </div>
    ) : (<Loader wave={true}/>)}
    </>
  )
}

export default ArtistScreen