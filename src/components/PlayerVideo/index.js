import Youtube from 'react-youtube'
import React from 'react'

const PlayerVideo = ({videoId}) =>{
    const opts ={
        height:'720',
        width: '1080',
        playerVars:{
            autoplay: 1,
        }
    }

    return <Youtube videoId={videoId} opts={opts}/>
}

export default PlayerVideo