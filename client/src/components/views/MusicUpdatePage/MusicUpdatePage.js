import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateMusic } from '../../../_actions/music_actions'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

function MusicUpdatePage(props) {
    const dispatch = useDispatch()
    const musicId = props.match.params.musicId
    
    const [AlbumName, setAlbumName] = useState("")
    const [TrackName, setTrackName] = useState("")
    const [ArtistName, setArtistName] = useState("")
    const [SoundSourceFilePath, setSoundSourceFilePath] = useState(null)

    const onAlbumNameHandler = (event) => {
        setAlbumName(event.currentTarget.value)
    }

    const onTrackNameHandler = (event) => {
        setTrackName(event.currentTarget.value)
    }

    const onArtistNameHandler = (event) => {
        setArtistName(event.currentTarget.value)
    }

    const onSoundSourceFileHandler = (event) => {
        setSoundSourceFilePath(event.target.files[0])
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("albumName", AlbumName)
        formData.append("trackName", TrackName)
        formData.append("artistName", ArtistName)
        formData.append("soundSourceFilePath", SoundSourceFilePath)

        dispatch(updateMusic(formData, musicId))
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
                    setSoundSourceFilePath(response.data.result[0].fileName)
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
                onSubmit={onSubmitHandler} encType='multipart/form-data'
            >
                <label>albumName</label>
                <input type="text" value={AlbumName} onChange={onAlbumNameHandler} />

                <label>trackName</label>
                <input type="text" value={TrackName} onChange={onTrackNameHandler} />

                <label>artistName</label>
                <input type="text" value={ArtistName} onChange={onArtistNameHandler} />
                
                <br />
                <input type="file" onChange={onSoundSourceFileHandler} name="soundSourceFilePath" />

                <br />
                <button type="submit">수정하기</button>
            </form>
        </div>
    )
}

export default withRouter(MusicUpdatePage)
