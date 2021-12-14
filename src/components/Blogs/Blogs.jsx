import React from 'react';
import { Typography } from '@material-ui/core';
import { blog1, blog2, blog3, blog4 } from '../../images/images';
import styles from './Blogs.module.css';

const CaseStudies = () => {
    const blogImages = [blog1, blog2, blog3, blog4];
    return (
        <div className={styles.container} id='blogs'>
            <div className={styles.title}>
                <Typography variant="h5" style={{ color: '#ffffff' }}>
                    Blogs
                </Typography>
            </div>

            <div className={styles.blogs}>
                {[0, 1, 2, 3].map(i => (
                    <div className={styles.blog}>
                        <div key={i} className={styles.gridBox}>
                            <img className={styles.image} src={blogImages[i]} alt="" />
                            <div className={styles.shade}>
                                <div className={styles.blogTitle}>
                                    <Typography variant="h6" style={{ color: '#ffffff' }}>
                                        {`Blog ${ i + 1 }`}
                                    </Typography>
                                </div>
                                <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                                    Cortex Copywriter
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CaseStudies
