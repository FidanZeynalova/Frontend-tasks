import React, { useRef, useEffect, useState } from 'react';

const ScrollVideo = ({ src }) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Əgər video  və ya elementlər yoxdursa: stop
            if (!videoRef.current || !containerRef.current || !isLoaded) return;

            const container = containerRef.current;
            const video = videoRef.current;

            const rect = container.getBoundingClientRect();

            // Skrolun konteyner daxilindəki faizini hesablanması (0-dan 1-ə qədər)
            const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));

            // Videonun saniyəsini dəyiş
            if (video.duration) {
                video.currentTime = video.duration * scrollProgress;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoaded]);

    return (
        <div ref={containerRef} style={{ height: '400vh', position: 'relative', backgroundColor: '#000' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                {!isLoaded && (
                    <div style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        Video Loading...
                    </div>
                )}
                <video
                    ref={videoRef}
                    src={src}
                    preload="auto"
                    muted
                    playsInline
                    onLoadedMetadata={() => setIsLoaded(true)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};

export default ScrollVideo;