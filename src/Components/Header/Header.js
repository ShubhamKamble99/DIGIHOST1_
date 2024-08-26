import React, { useState } from 'react';
import Style from "./header.module.css";
import Logo from '../../Assets/logo.gif';
import Call from "../../Assets/telephone.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Importing close icon
import Arrow from "../../Assets/Arrow_.png";

function Header({ id, title, type, para }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='section' style={{ position: "relative" }}>
                <div className={`${Style.headerSection} ${id === '1' ? Style.mobileView : ""}`}>
                    {id === '0' && (<div className={`${Style.headerInsideview}`}></div>)}
                    {id === '1' && (<div className={`${Style.headerInsideview2}`}></div>)}
                </div>
                <div className={`${Style.Logo} ${id === "1" ? Style.mobileLogo : null}`}>
                    <div>
                        <img style={{ marginLeft: id === '1' ? ".6rem" : null }} src={Logo} alt='logo' />
                    </div>
                    {id === '0' && (
                        <div className={`${Style.logoTxt}`}>
                            Lotus <span>Developer</span>
                        </div>
                    )}
                    {id === '1' && (
                        <div style={{ textTransform: "capitalize", letterSpacing: "1px" }} className={`${Style.logoTxt}`}>
                            The Atlantis
                        </div>
                    )}
                </div>
                {
                    id === '0' && (
                        <>
                            <div className={Style.menuIcon}>
                                <HiOutlineMenu onClick={toggleMenu} size={30} />
                            </div>
                            <div className={`${Style.menuOverlay} ${menuOpen ? Style.menuOpen : ''}`}>
                                <div className={Style.closeIcon}>
                                    <HiOutlineX onClick={toggleMenu} size={30} />
                                </div>
                                <ul className={Style.menuList}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </>
                    )
                }

                <div className={`d-md-block d-none ${Style.NextBtn}`}>
                    {id === '1' && (
                        <div className={Style.nextImg}>
                            <img src={Arrow} alt="Next" />
                        </div>
                    )}
                </div>
            </div>
            {id === '0' && (
                <div className={`col-md-10  d-md-flex justify-content-between ${Style.HeadeDesc}`}>
                    <div>
                        <div className={`${Style.titletxt}`}>
                            <div>Mumbai's Premier </div>
                            <div>Real Estate Developers</div>
                        </div>
                        <div className={`${Style.ContactUs}`}>
                            <img width={30} src={Call} alt='Call' />  Contact Us
                        </div>
                        <div className='mt-md-3'>
                            <button>Find Your Property</button>
                        </div>
                    </div>
                    <div className={`${Style.Decription}`}>
                        <div style={{ color: "#a6a3a3" }}>impressive portfolio of residential, office, office,  and <br /> mixed-use properties</div>
                        <div className={`${Style.LotusTxt}`}>Lotus <span>Developers</span> </div>
                    </div>
                </div>
            )}
            {id === '1' && (
                <div className={` d-md-flex justify-content-between ${Style.HeadeDesc}`}>
                    <div className={`col-md-5 ${Style.Decription}`}>
                        <div className="Propertytype">Residental <span>Developments</span> </div>
                    </div>
                    <div className={`col-md-7 ${Style.PopertyInfo}`}>
                        <div className={`${Style.PopertyName}`}>The Atlantis</div>
                        <div className={`pt-md-2 ${Style.PopertyDec}`}>Atlantis is a one-of-a-kind project. It's uniqueness comes from the sheer scale and grandness of it. Limited 36 residences are home to Mumbai's elite families. Flourished with an endless list of amenities, Atlantis caters to your every need.
                            Atlantis is a one-of-a-kind project. It's uniqueness comes from the sheer scale and grandness of it. Limited 36 residences are home to Mumbai's elite families. Flourished with an endless list of amenities, Atlantis caters to your every need.
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;
