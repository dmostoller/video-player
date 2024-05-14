import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';


function VideoPlayer ({videoUrl}) {


    const player = cloudinary.videoPlayer('video-player', {
        cloudName: 'ddp2xfpyb',
        fluid: true,
        controls: true
      });
      player.source({videoUrl});


    return ( 
        <video id="video-player"/>
    );
}

export default VideoPlayer