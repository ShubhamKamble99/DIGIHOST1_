import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from './AboutUs.module.css';
import Quality from "../../Assets/Quality.jpg";
import Luxury from "../../Assets/Luxury.jpg";
import Efficiency from "../../Assets/Efficiency.jpg";
import Arrow from "../../Assets/Arrow.png"
const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const content = [
        {
            title: "Quality",
            description: "We create real estate spaces for those who value impeccable design, superior craftsmanship, and the finest appointments. Each and every one of our developments embodies the true definition of quality, from customized finishes and thoughtful floor plans to the elevated offerings of our premium amenities.",
            image: Quality,
        },
        {
            title: "Luxury",
            description: "True luxury is a matter of comfort. The Lotus standard is widely recognized as a unique value proposition allowing buyers to choose from a sophisticated selection of the finishes, design, and layouts to tailor homes to their individual tastes. Luxury extends beyond the tangibles to include views, flexible floor plans, and unrivaled amenities.",
            image: Luxury,
        },
        {
            title: "Efficiency",
            description: "Efficiency comes from our commitment to working with talented professionals. We collaborate with world-renowned architects, designers and consultants. Our in-house teams oversee every aspect, from conception to completion, devoting the time, energy, and resources needed to deliver the finest products and services.",
            image: Efficiency,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [content.length]);

    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    const currentContent = content[currentIndex];

    return (
        <div className={styles.aboutUs}>
            <div className="row d-flex align-items-center">
                <div className={`col-md-8`}>
                    <animated.div style={fade}>
                        <img src={currentContent.image} alt={currentContent.title} className={styles.image} />
                    </animated.div>
                </div>
                <div className={`col-md-4 mt-md-0 mt-5 ${styles.content}`}>
                    <div className="Propertytype">About Us</div>
                    <animated.div style={fade}>
                        <div className={`${styles.title}`}>{currentContent.title}</div>
                        <div className={`${styles.description}`}>{currentContent.description}</div>
                    </animated.div>
                    <button onClick={() => setCurrentIndex((currentIndex + 1) % content.length)}>
                        Next
                        <span><img width={90} src={Arrow} alt="Next"/></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
