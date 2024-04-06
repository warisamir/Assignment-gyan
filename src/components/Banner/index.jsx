import React from "react";
import "./index.css";
import bannerImg from "/src/assets/Banner.svg";
import { Container } from "react-bootstrap";

export default () => {
    return (
        <Container fluid className="banner"  style={{
                backgroundImage:`url(${bannerImg})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}>
            <Container className="banner-text">
                <h1>
                    Discover Exciting Events Happening Near you - Stay Tuned for Updates!
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro autem veniam omnis sunt neque dolores velit possimus perspiciatis soluta.</p>
            </Container>
        </Container>
    );
};
