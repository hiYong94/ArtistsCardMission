import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateMusic } from '../../../_actions/music_actions'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

function MusicUpdatePage(props) {
    const dispatch = useDispatch()
    const musicId = props.match.params.musicId
    
    const [UserId, setUserId] = useState("")
    const [AlbumName, setAlbumName] = useState("")
    const [TrackName, setTrackName] = useState("")
    const [ArtistName, setArtistName] = useState("")
    const [SoundSourceFilePath, setSoundSourceFilePath] = useState("")

    const onAlbumNameHandler = (event) => {
        setAlbumName(event.currentTarget.value)
    }

    const onTrackNameHandler = (event) => {
        setTrackName(event.currentTarget.value)
    }

    const onArtistNameHandler = (event) => {
        setArtistName(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let body = {
            albumName: AlbumName,
            trackName: TrackName,
            artistName: ArtistName
        }

        dispatch(updateMusic(body, musicId))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/music')
            } else {
                alert('Failed to Register Music')
            }
        })
    }

    useEffect(() => {
        axios.get(`/api/music/${musicId}`)
            .then((response) => {
                if(response.data.success) { 
                    setAlbumName(response.data.result[0].albumName)
                    setTrackName(response.data.result[0].trackName)
                    setArtistName(response.data.result[0].artistName)
                } else {
                    alert('Failed to get Music')
                }
            })
    }, [])
    
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '70vh'
        }}>
            
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>albumName</label>
                <input type="text" value={AlbumName} onChange={onAlbumNameHandler} />

                <label>trackName</label>
                <input type="text" value={TrackName} onChange={onTrackNameHandler} />

                <label>artistName</label>
                <input type="text" value={ArtistName} onChange={onArtistNameHandler} />
                
                <label>soundSourceFilePath</label>
                <input type="text" value={SoundSourceFilePath}/>

                <br />
                <button type="submit">수정하기</button>
            </form>
        </div>
    )
}

export default withRouter(MusicUpdatePage)
