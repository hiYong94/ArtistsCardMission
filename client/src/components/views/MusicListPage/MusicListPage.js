import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Row, Col, Input } from 'antd'
import axios from 'axios'
import PhoneForm from '../commons/PhoneFrom'
const { Search } = Input

function MusicListPage(props) {
    const [Music, setMusic] = useState([])
    const [TrackName, setTrackName] = useState("")

    useEffect(() => {
        axios.get('/api/music')
            .then((response) => {
                if(response.data.success) { 
                    console.log(response.data.result)
                    setMusic(response.data.result)
                } else {
                    alert('Failed to get Music')
                }
            })
    }, [])

    const renderMusics = Music.map((music) => {
        return <Col lg={6} md={8} xs={24}>
                    <button><a href={`/music/update/${music.musicId}`} >수정하기</a></button><br />
                    <span>{music.musicId} </span><br />
                    <span>{music.albumName} </span><br />
                    <span>{music.trackName} </span>
                </Col>

    })

    const handleValueChange = (e) => {
        let nextState = {}
        nextState[e.target.name] = e.target.value;
        this.setState()
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '70vh'
        }}>
            
            {/* {renderMusicList} */}
            <div style={{ width: '85%', margin: '1rem auto' }}>
                {/* Music search bar */}
                <PhoneForm />
                {/* <input
                    placeholder="음악 검색"
                    onChange={onSearchHandler}
                    
                /> */}
                {/* <Search
                    placeholder="input search text"
                    onSearch={onSearchHandler}
                    enterButton
                /> */}
                {/* <input
                    placeholder="음악 검색"
                    name="searchKeyword"
                    value={this.state.searchKeyword}
                    onChange={handleValueChange}
                /> */}

            <div style={{ display: 'flex' }}>
                <h2>음원 리스트 페이지</h2>
                <Button type="submit"><a href="/music/register">음원 추가</a></Button>`
            </div>
            
            <Row gutter={16}>
                {renderMusics}
            </Row>
        </div>
        </div>
    )
}

export default withRouter(MusicListPage)