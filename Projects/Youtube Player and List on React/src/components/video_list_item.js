import React from 'react';
import VideoList from './video_list';

const VideoListItem = ({video, onVideoSelect}) => {
    //const video = props.video;
  //const onVideoSelect = props.onVideoSelect;

  // то же что и скобках на строке выше const videos = props.videos;
    const imageURL = video.snippet.thumbnails.default.url;

      return (
        <li onClick= {() => onVideoSelect(video) } className = "list-group-item">

          <div className = "video-list media">
              <div className = "media-left">
                 <img className = "media-object"  src = {imageURL} />
              </div>
                 <div className = "media-body">
                    <div className = "media-heading"> {video.snippet.title} </div>
              </div>
          </div>
        </li>
      );
};


export default VideoListItem;
