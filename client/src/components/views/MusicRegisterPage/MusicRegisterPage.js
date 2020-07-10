import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerMusic } from '../../../_actions/music_actions'
import { withRouter } from 'react-router-dom'

function MusicRegisterPage(props) {
    const dispatch = useDispatch()

    const [UserId, setUserId] = useState("")
    const [AlbumName, setAlbumName] = useState("")
    const [TrackName, setTrackName] = useState("")
    const [ArtistName, setArtistName] = useState("")
    const [SoundSourceFilePath, setSoundSourceFilePath] = useState("")

    const onUserIdHandler = (event) => {
        setUserId(event.currentTarget.value)
    }

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
            userId: UserId,
            albumName: AlbumName,
            trackName: TrackName,
            artistName: ArtistName
        }

        dispatch(registerMusic(body))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/music')
            } else {
                alert('Failed to Register Music')
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '70vh'
        }}>
            
            
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>userId</label>
                <input type="text" value={UserId} onChange={onUserIdHandler} />

                <label>albumName</label>
                <input type="text" value={AlbumName} onChange={onAlbumNameHandler} />

                <label>trackName</label>
                <input type="text" value={TrackName} onChange={onTrackNameHandler} />

                <label>artistName</label>
                <input type="text" value={ArtistName} onChange={onArtistNameHandler} />
                
                <label>soundSourceFilePath</label>
                <input type="text" value={SoundSourceFilePath}/>

                <br />
                <button type="submit">추가하기</button>
            </form>
        </div>
    )
}

export default withRouter(MusicRegisterPage)
