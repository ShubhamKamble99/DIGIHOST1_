import React from 'react'
import Style from "./commercial.module.css"
import Logo from "../../Assets/logo.gif"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Arrow from "../../Assets/Arrow_.png"
function index() {
    return (
        <div className={`row  ${Style.commercial}`}>
            <div className='col-md-5 col-12'>
                <div className='Propertytype'>Commercial <span>Devlopments</span></div>
                <div className={`${Style.commercialName}`} >Lotus Corporate Park - LCP</div>
                <div className={`${Style.commercialInfo}`}>LCP is one of the largest commercial projects in Asia based on square footage. It is an amalgamation of the finest amenities complementing large flexible office spaces. LCP houses the head offices of many Fortune 500 multinationals like Deloitte and Heinze. LCP is one of the largest commercial projects in Asia based on square footage. It is an amalgamation of the finest amenities complementing large flexible office spaces. LCP houses the head offices of many Fortune 500 multinationals like Deloitte and Heinze. LCP is one of the largest commercial projects in Asia based on square footage. It is an amalgamation of the finest amenities complementing large flexible office spaces. LCP houses the head offices of many Fortune 500 multinationals like Deloitte and Heinze.</div>
            </div>
            <div className='col-md-7 col-12 d-md-block d-none'>
                <div className={`${Style.headerSection}`}>
                    <div className={`${Style.headerInsideview}`}></div>
                </div>
                <div className={`${Style.Logo} d-md-flex d-none align-items-center`}>
                    <div>
                        <img width={70} src={Logo} alt='logo' />
                    </div>
                    <div className={`${Style.logoTxt}`}>
                        Lotus Corporate Park - LCP
                    </div>
                </div>
                <div className={`${Style.NextBtn}`}>
                    <div className={Style.nextImg}>
                        <img src={Arrow} alt="Next" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
