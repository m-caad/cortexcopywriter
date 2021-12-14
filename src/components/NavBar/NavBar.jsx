import React, { useState } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import styles from './NavBar.module.css';
import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
import { BrowserRouter } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from "react-scroll"
import "./Navbar.css"
import { IconContext } from 'react-icons/lib';
import { name } from '../../images/images';

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const { ref: refP } = useWebAnimations({
        id: 'charP',
        keyframes: { color: ['#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refR } = useWebAnimations({
        id: 'charR',
        keyframes: { color: ['#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refO } = useWebAnimations({
        id: 'charO',
        keyframes: { color: ['#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refJ } = useWebAnimations({
        id: 'charJ',
        keyframes: { color: ['#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refE } = useWebAnimations({
        id: 'charE',
        keyframes: { color: ['#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refC } = useWebAnimations({
        id: 'charC',
        keyframes: { color: ['#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refT } = useWebAnimations({
        id: 'charT',
        keyframes: { color: ['#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: ref_ } = useWebAnimations({
        id: 'char_',
        keyframes: { color: ['#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: ref4 } = useWebAnimations({
        id: 'char4',
        keyframes: { color: ['#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refB } = useWebAnimations({
        id: 'charB',
        keyframes: { color: ['#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00'] },
        timing: { duration: 5000, iterations: Infinity },
    });
    return (
        <div className={styles.NavBar}>
            <span className={styles.charP} ref={refP}>P</span>
            <span className={styles.charR} ref={refR}>r</span>
            <span className={styles.charO} ref={refO}>o</span>
            <span className={styles.charJ} ref={refJ}>j</span>
            <span className={styles.charE} ref={refE}>e</span>
            <span className={styles.charC} ref={refC}>c</span>
            <span className={styles.charT} ref={refT}>t</span>
            <span className={styles.char_} ref={ref_}>_</span>
            <span className={styles.char4} ref={ref4}>4</span>
            <span className={styles.charB} ref={refB}>B</span>

            <div className={styles.btnContainer}>
                <BrowserRouter>
                    <IconContext.Provider value={{ color: "#fff" }}>
                        {/* <div className="navbar"> */}
                        {/* <Link to="#" className={styles.menuBtn}> */}
                        <div className={styles.menuBtn}>
                            <FaBars onClick={showSidebar} />
                        </div>
                        {/* </Link> */}
                        {/* </div> */}
                        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                            <ul className="nav-menu-items" onClick={showSidebar}>
                                <li className="navbar-toggle">
                                    <div className='menu-bars'>
                                        {/* <Link to="#" className="menu-bars"> */}
                                        <AiIcons.AiOutlineClose />
                                        {/* </Link> */}
                                    </div>
                                </li>
                                {/* {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <sapn>{item.title}</sapn>
                                        </Link>
                                    </li>
                                )
                            })} */}
                                {/* <li className="nav-text"> */}
                                {/* <Link to="#test" className="nav-text">
                                        Services
                                    </Link> */}
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    <center><img src={name} alt="" style={{ height: "140px", cursor: "pointer", }} /></center>
                                </Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="test"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Services</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >About</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="chatbot"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Chatbot</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="samples"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Samples</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="reviews"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Reviews</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Contacttest</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="caseStudies"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Case Studies</Link>
                                <Link
                                    className='nav-text'
                                    activeClass="active"
                                    to="blogs"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Blogs</Link>
                                {/* </li> */}
                            </ul>
                        </nav>
                    </IconContext.Provider>
                </BrowserRouter>
            </div>
        </div>
    )
};

export default NavBar
