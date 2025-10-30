import React from 'react';

import styles from './styles.module.css';

type Props = {
    videoSrc: string;
    title?: string;
};

export default function InlineVideoPlayer({ videoSrc, title }: Props) {
    return (
        <video
            playsInline
            muted
            width="100%"
            className={styles.Root}
            title={title}
            autoPlay
            loop
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
