import "./index.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import TitleCard from "../../Card/TitleCard";
import Loader from "../../Loader";

export default () => {
    const [UpcomeEvents, setUpcomeEvents] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`).then(val => {
            console.log(val.data.events);
            setUpcomeEvents((pre) => {
                return [...pre, ...val.data.events];
            })
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };


    return (
        <>
            <Container className="fw-bold fs-5 my-4 ps-4" style={{ color: "#1E2022" }}>
                Upcoming Events <BsArrowRight />
            </Container>

            <Container>
                <Row>
                    {
                        UpcomeEvents?.map((val, index) => {
                            return (
                                <Col lg={4} md={6} sm={12} >
                                    <TitleCard key={index} data={val} />
                                </Col>
                            )
                        })
                    }

                </Row>
                <Row>
                    {loading && <Col> <Loader/></Col>}
                </Row>

            </Container>


        </>
    );
};
