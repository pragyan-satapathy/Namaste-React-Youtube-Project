import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideo()
  }, [])

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const videoList = await data.json()
    setVideos(videoList.items)
  }

  if (videos.length == 0) return null
  return (
    <div className='flex flex-wrap'>
      {videos.map(video => <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video} />
      </Link>)}
    </div>
  )
}

export default VideoContainer