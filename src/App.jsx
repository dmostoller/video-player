import { useState } from 'react'
import './App.css'
import UploadVideoWidget from './components/UploadVideoWidget'
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videoUrl, setVideoUrl] = useState();


    return (
    <>
        <h1>Upload Video</h1>
        <div className="card">
            <UploadVideoWidget onSetVideoUrl={setVideoUrl}/>
        </div>
        <div className='card' style={{width: "90vw", margin: "auto"}}>
        <h1>Video</h1>
        {videoUrl && 
            <VideoPlayer videoUrl={videoUrl}/>
        }    
        </div>
        
    </>
    )
}

export default App
