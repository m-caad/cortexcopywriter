import React from 'react';
import { Typography } from '@material-ui/core';
import useWebAnimations from '@wellyshen/use-web-animations';
import { IntroFeatured, IntroFrontLayer, IntroBrain } from '../../images/images';
import styles from './FeaturedImage.module.css';

const FeaturedImage = () => {
    const { ref: brainRef } = useWebAnimations({
        id: "brain",
        keyframes: { transform: ["translateY(20px)", "translateY(-20px)"] },
        timing: { duration: 2500, iterations: Infinity, direction: 'alternate', easing: "ease-in-out", },
    });
    const { ref: layerRef } = useWebAnimations({
        id: 'layer',
        keyframes: { opacity: [0, 1, 1,] },
        timing: { duration: 1000, iterations: Infinity, direction: 'alternate', easing: 'steps(3, end)' },
    });
    return (
        <div className={styles.container} id='home'>
            <div className={styles.leftContainer}>
                <Typography variant="h1" style={{ color: '#ffffff' }} className={styles.heading1}>CORTEX</Typography>
                <Typography variant="h2" style={{ color: '#ffffff' }} className={styles.heading2}>COPYWRITER</Typography>
                <Typography variant="h5" style={{ color: '#ffffff' }} className={styles.heading3}>
                    Enhance your communications with psychology-based copywriting and UX writing
                </Typography>
                <button className={styles.chatBtn}>
                    <Typography variant="subtitle1" style={{ color: "#ffffff" }}>Send a message</Typography>
                </button>
            </div>
            <div className={styles.rightContainer}>
                <img src={IntroFeatured} alt="" className={styles.featuredImage} />
                <img src={IntroFrontLayer} alt="" className={styles.frontLayer} ref={layerRef} />
                <img src={IntroBrain} alt="" className={styles.introBrain} ref={brainRef} />
            </div>
        </div>
    )
}

export default FeaturedImage;
