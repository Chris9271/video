import React, {useState} from 'react';
import Modal from 'react-modal';
import './Video.scss';

const Videos = (props) => {
    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }
    Modal.setAppElement('#modal-root');

    const {videos} = props;
    const [watchVideo, setWatchVideo] = useState(false);
    const openVideoModal = () => setWatchVideo(true);
    const closeVideoModal = () => setWatchVideo(false);

    return (
        <div className="iterate-video">
            {videos.map((video) => (
            <div className="video-appearance" key={video.id.videoId}>
            <Modal
                isOpen={watchVideo}
                onRequestClose={closeVideoModal}
                style={customStyle}
                >
                <div>
                    <div className="video">
                        <iframe
                            width="600"
                            height="400"
                            title={video.snippet.title}
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </Modal>
                <div className="video-image">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="image" onClick={openVideoModal}/>
                </div>
                <h3 className="video-description">{video.snippet.title}</h3>
                <div className="video-source">
                    <span>{video.snippet.channelTitle}</span>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Videos;
