import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Videos = ({videos}) => {
    const [id, setId] = useState("");
    const [watchVideo, setWatchVideo] = useState(false);
    const openVideoModal = (e, id) => {
        e.preventDefault();
        setId(id)
        setWatchVideo(true);
    }
    const closeVideoModal = () => setWatchVideo(false);

    return (
        <div className="c-videos">
            <div className="c-videos__wrapper row">
            {videos.map((video) => (
                <div className="c-video col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6" key={video.id.videoId}>
                {id === video.id.videoId ? 
                <Modal
                    show={watchVideo}
                    onHide={closeVideoModal}
                    centered
                    >
                    <div className="video">
                        <iframe
                            width="600"
                            height="400"
                            title={video.snippet.title}
                            src={`https://www.youtube.com/embed/${id}`}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </Modal>
                : null
            }
                <div className="c-video__image">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="e-image" onClick={(e) => openVideoModal(e, video.id.videoId)}/>
                </div>
                <h6 className="c-video__description">{video.snippet.title}</h6>
                <span className="e-source">{video.snippet.channelTitle}</span>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Videos;
