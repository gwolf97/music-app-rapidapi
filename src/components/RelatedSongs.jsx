import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedTracks } from '../actions/actions'

const RelatedSongs = ({songKey}) => {

    const dispatch = useDispatch()
    const relatedSongs = useSelector(state => state.relatedTracks.songs)

    React.useEffect(() => {
        dispatch(getRelatedTracks(songKey))
    }, [])

    console.log(relatedSongs)

  return (
    <div style={{height:"100px"}}>RelatedSongs</div>
  )
}

export default RelatedSongs