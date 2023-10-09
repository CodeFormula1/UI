import React, { RefObject, useRef, useState } from "react";
import { CSSProperties } from "react";
import TyreDegVideo from "../../images/Tyre_deg_video.mp4"
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const styles: {
    videoContainer: CSSProperties;
    video: CSSProperties;
    customControls: CSSProperties;
    controlButton: CSSProperties;
    icon: CSSProperties;
} = {
    videoContainer: {
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        marginLeft: "0px",
        marginTop: "0px",
    },
    video: {
        width: "85%",
    },
    customControls: {

        width: "85%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    controlButton: {
        cursor: "pointer",
        color: "white",
        margin: "0 10px",
    },
    icon: {
        fontSize: "64px", // Increase the icon size as needed
    },
};


const LandingVideo = () => {
    const videoRef: any = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (videoRef?.current?.paused) {
            videoRef?.current?.play();
            setIsPlaying(true);
        } else {
            videoRef?.current?.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div style={styles.videoContainer}>
            <video ref={videoRef} style={styles.video} muted autoPlay>
                <source src={TyreDegVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.customControls}>
                <div style={styles.controlButton} onClick={togglePlayPause}>
                    {isPlaying ? (
                        <PauseCircleIcon style={{ ...styles.icon, color: 'white' }}/>
                    ) : (
                        <PlayCircleIcon style={{ ...styles.icon, color: 'white' }} />
                    )}
                </div>
            </div>

        </div>
    );
};

export default LandingVideo;
