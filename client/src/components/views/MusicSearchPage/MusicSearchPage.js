import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'antd'
import axios from 'axios'

function MusicSearchPage(props) {
    const [TrackName, setTrackName] = useState("")
    const [Music, setMusic] = useState([])
    
    console.log("TrackName", TrackName)

    const onChange = (event) => {
        setTrackName(event.target.value)
    }

    const onClick = (event) => {
        event.preventDefault()

        axios.get(`/api/music/search/${TrackName}`)
        .then((response) => {
            if(response.data.success) { 
                console.log(response.data.result)
                setMusic(response.data.result)
            } else {
                alert('Failed to get Music')
            }
        })
    }
    
    const renderMusics = Music.map((music, index) => {
        return <Col lg={6} md={8} xs={24}>
                    <span>번호 : {index} </span><br />
                    <span>앨범명 : {music.albumName} </span><br />
                    <span>트랙명 : {music.trackName} </span><br />
                    <span>아티스트명 : {music.artistName} </span><br />
                    <span>음원명 : {music.fileName} </span><br />
                </Col>
    })

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '70vh'
        }}>
            
            {/* {renderMusicList} */}
            <div style={{ width: '85%', margin: '1rem auto' }}>


            <h2>음원 리스트 페이지</h2>
            <input type="text" value={TrackName} onChange={onChange} />
                <button type="submit" onClick={onClick}>검색</button>
            <hr/>
            <Row gutter={16}>
                {renderMusics}
            </Row>
            </div>
        </div>
    )
}

export default withRouter(MusicSearchPage)