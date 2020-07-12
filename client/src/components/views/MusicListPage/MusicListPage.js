import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Row, Col } from 'antd'
import axios from 'axios'

function MusicListPage(props) {
    const [Music, setMusic] = useState([])
    const [TrackName, setTrackName] = useState("")

    useEffect(() => {
        axios.get('/api/music')
            .then((response) => {
                if(response.data.success) { 
                    setMusic(response.data.result)
                } else {
                    alert('Failed to get Music')
                }
            })
    }, [])

    const renderMusics = Music.map((music, index) => {
        return <Col lg={6} md={8} xs={24}>
                    <span>번호 : {index} </span><br />
                    <span>앨범명 : {music.albumName} </span><br />
                    <span>트랙명 : {music.trackName} </span><br />
                    <span>아티스트명 : {music.artistName} </span><br />
                    <span>음원명 : {music.fileName} </span><br />
                    <button><a href={`/music/update/${music.musicId}`} >수정하기</a></button><br />
                </Col>
    })

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '70vh'
        }}>
            
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>음원 리스트 페이지</h2>
                <Button type="submit"><a href="/music/register">음원 추가</a></Button>
                
                <hr/>
                <Row gutter={16}>
                    {renderMusics}
                </Row>
            </div>
        </div>
    )
}

export default withRouter(MusicListPage)