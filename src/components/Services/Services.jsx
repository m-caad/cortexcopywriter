import React from 'react';
import { Typography } from '@material-ui/core';
import useWebAnimations, { tada, swing, heartBeat } from '@wellyshen/use-web-animations';
import { service1, service2, service3 } from '../../images/images';
import styles from './Services.module.css';

const Services = () => {
    const { ref: service1Ref } = useWebAnimations({
        ...tada,
        autoPlay: false,
        timing: {
            ...tada['timing'],
            id: 'service1',
            iterations: 1,
            duration: 2500,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 4000),
    });
    const { ref: service2Ref } = useWebAnimations({
        ...swing,
        autoPlay: false,
        timing: {
            ...swing['timing'],
            id: 'service2',
            iterations: 1,
            duration: 3000,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 5000),
    });
    const { ref: service3Ref } = useWebAnimations({
        ...heartBeat,
        autoPlay: false,
        timing: {
            ...heartBeat['timing'],
            id: 'service3',
            iterations: 1,
            duration: 3000,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 5000),
    });
    return (
        <div className={styles.container} id="test">
            <div className={styles.service1Image} ref={service1Ref}>
                <img src={service1} alt="" />
            </div>
            <div className={styles.service1Title}>
                <Typography variant="h3" style={{ color: "#ffffff" }}>UX Writing hello</Typography>
            </div>
            <div className={styles.service1Descrip}>
                <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis quam assumenda! Fugit, voluptate. Exercitationem officiis voluptates temporibus dicta vero quasi et, corporis laudantium consectetur numquam rerum esse odio est dignissimos aspernatur. Illum ea dignissimos sunt. Dolores dolore eos in fugiat esse, repudiandae rerum possimus aliquid, perspiciatis voluptatibus numquam earum! Distinctio nihil doloribus, illum odit quibusdam fuga aut? Id unde enim repudiandae hic. Soluta saepe sequi tempora amet quis provident. Nostrum repellendus ea ab natus omnis cumque, adipisci nam accusamus!
                </Typography>
            </div>

            <div className={styles.service2Image} ref={service2Ref}>
                <img src={service2} alt="" />
            </div>
            <div className={styles.service2Title}>
                <Typography variant="h3" style={{ color: "#ffffff" }}>Website Copywriting</Typography>
            </div>
            <div className={styles.service2Descrip}>
                <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores eius rem alias reiciendis mollitia facilis quas doloribus tempora magni excepturi eveniet voluptas nisi dignissimos, commodi enim dolores porro consectetur ea cupiditate inventore minima maiores dolore non. Hic illum eos illo, minus voluptates modi autem beatae quidem laudantium deserunt unde commodi recusandae provident possimus. Officia, sapiente excepturi sit corrupti fuga nihil hic illum a, consequuntur similique, ducimus omnis eaque explicabo et cumque itaque laudantium dolorem quaerat velit porro. Vero, totam dolore.
                </Typography>
            </div>

            <div className={styles.service3Image} ref={service3Ref}>
                <img src={service3} alt="" />
            </div>
            <div className={styles.service3Title}>
                <Typography variant="h3" style={{ color: "#ffffff" }}>Content Writing</Typography>
            </div>
            <div className={styles.service3Descrip}>
                <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quas distinctio vero, ea at quasi optio eum ipsum harum nostrum quibusdam, unde dolorem quos saepe inventore similique nulla consequatur! Porro quas repellendus tenetur incidunt in dolorem aperiam dicta, maxime temporibus iure adipisci officiis assumenda quis officia vitae accusamus laborum illum aliquam sequi sunt excepturi earum nostrum. Voluptate quisquam neque debitis similique. Vitae, odit placeat alias et maiores temporibus pariatur beatae eligendi doloribus quas possimus aspernatur eaque nemo dolore ea veritatis.
                </Typography>
            </div>
        </div>
    )
}

export default Services
