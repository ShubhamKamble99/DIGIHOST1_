import React from 'react';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import FooterLogo from "../../Assets/FooterLogo.png";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Arrow from "../../Assets/Arrow_.png"
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`row d-md-flex justify-content-between align-items-center ${styles.footerContent}`}>
                <div className={`col-md-4 ${styles.contactInfo}}`}>
                    <div className={styles.contactItem}>
                        <div>  <FaMapMarkerAlt className={styles.icon} /></div>
                        <div className={`ms-2 ${styles.contactinfo}`}>
                            Lodivus Tower, Road No. 12 A, Behind Juhu Gymkhana Club, Juhu, Mumbai - 400049.
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <div>   <FaEnvelope className={styles.icon} /></div>
                        <div className={`ms-2 ${styles.contactinfo}`}>sadives@lotusdevelopers.com</div>
                    </div>
                    <div className={styles.contactItem}>
                        <div><FaPhone className={styles.icon} /></div>
                        <div className={`ms-2 ${styles.contactinfo}`}>+91-9987509311</div>
                    </div>
                </div>
                <div className={`col-md-4 ${styles.logo}`}>
                    <img width={200} src={FooterLogo} alt="Lotus Developers" />
                </div>
                <div className={`col-md-4 ${styles.navigation}`}>
                    <a href="#">
                        <img src={Arrow} alt="Next" />
                        Our Philosophy</a>
                    <a href="#">  <img src={Arrow} alt="Next" />About Us</a>
                    <a href="#">  <img src={Arrow} alt="Next" />Residential Developments</a>
                    <a href="#">  <img src={Arrow} alt="Next" />Commercial Developments</a>
                    <a href="#">  <img src={Arrow} alt="Next" />Contact Us</a>
                </div>
            </div>
        </div>
    );
};


export default Footer;
