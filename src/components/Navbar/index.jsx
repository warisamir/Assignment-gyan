import React from "react";
import "./index.css";
import { FaHeart, FaListUl, FaUser, FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { Container, Form, InputGroup, Row, Col } from "react-bootstrap";

export default () => {
    return (
        <Container className="py-2">

            {/* navbar top part */}
            <Row className="d-flex">

                <Col xs={7} sm={9} md={3} lg={2}>
                    <span id="nav-logo" className="fw-bold fs-4">BookUsNow</span>
                </Col>

                <Col md={3} lg={2} className="cat-btn">
                    <button id="category-btn" className="d-flex align-items-center btn btn-dark fw-bold">
                        <FaListUl style={{
                            fontSize: 'larger',
                            marginRight: 5
                        }} />
                        <span>Categories</span>
                    </button>
                </Col>
                <Col md={6} lg={8} className="nav-btns">

                    <div className="search-tab w-75">

                        <InputGroup className="w-75" >
                            <Form.Control placeholder="DJ | Phantom" size="md" />
                            <InputGroup.Text>
                                <ImSearch />
                            </InputGroup.Text>
                        </InputGroup>

                    </div>
                    <div className="d-flex justify-content-evenly align-items-center" >
                        <div className="d-flex align-items-center btn">

                            <FaHeart style={{
                                color: "#989090",
                                fontSize: 'larger'
                            }} />
                            <span className="ms-2" style={{
                        color: "#989090"
                    }}>Favorites</span>


                        </div>
                        <div className="btn btn-light" style={{
                        color: "#989090"
                    }}>
                            SignIn
                        </div>
                    </div>

                </Col>

                <Col xs={5} sm={3} className="nav-icons fs-4 p-1" style={{
                    color: "#989090"
                }}>

                    <ImSearch />
                    <FaHeart />
                    <FaUser />
                </Col>

            </Row>

            {/* Nav bottom part */}
            <Row >
                <Col lg={3} className="loc-btn d-flex btn align-items-center fs-6" style={{ color: "#989090" }}>

                    <FaLocationDot />
                    <span className="mx-1">Mumbai, India</span>
                    <FaAngleRight />

                </Col>
                <Col lg={9} className="nav-links d-flex list-unstyled justify-content-start align-items-center overflow-x-scroll"
                    style={{ scrollbarWidth: "none",color:"#989090" }}>

                    <li className="ms-1 text-nowrap">Live Shows</li>
                    <li className="mx-4">Streams</li>
                    <li className="mx-4">Movies</li>
                    <li className="mx-4">Plays</li>
                    <li className="mx-4">Events</li>
                    <li className="mx-4">Sports</li>
                    <li className="mx-4">Activities</li>

                </Col>
            </Row>

        </Container>
    );
};
