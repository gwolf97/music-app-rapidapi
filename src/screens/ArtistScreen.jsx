import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getArtistDetails } from "../actions/actions"
import ArtistDetails from '../components/ArtistDetails'
import ArtistTopSongs from '../components/ArtistTopSongs'
import Fade from "react-reveal/Fade"
import { DisappearedLoading	 } from 'react-loadinggg';



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
                {loading && <DisappearedLoading size={"large"}/>}
                {!loading && success && (
                    <Fade bottom>
                        <div className="details-div">
                            <ArtistDetails artist={artist} artistId={params.id}/>
                        </div>
                    </Fade>
                            )}
        <ul className="related-songs-container" style={{marginTop:"250px", width:"100%", display:"flex", flexDirection:"column", justifyContent:"start" }}>
             {!loading && success && (
                <Fade bottom>
                    <ArtistTopSongs artist={artist} />
                </Fade>
             )}
        </ul>
    </div>
    </>
  )
}

export default ArtistScreen