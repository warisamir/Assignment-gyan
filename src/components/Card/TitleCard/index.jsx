import React from "react";
import "./index.css";
import moment from 'moment';
import { FaLocationDot } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";

const TrimLink = (url) => {
    let link = url.split("/d/")
    return link[1].split("/view")[0];
}

export default ({ data }) => {
    console.log(`https://drive.google.com/thumbnail?id=${TrimLink(data.imgUrl)}`);
    return (
        <div className="body-card m-auto mb-5" >
            <div className="body-img">
                <img className="img-card" loading="lazy" src={`https://drive.google.com/thumbnail?id=${TrimLink(data.imgUrl)}`} alt="Image" />
                <div style={{
                    textAlign: "left",
                    alignSelf: "center",
                    position: "absolute",
                    bottom: 15,
                    left: 16.4,
                    zIndex: 10,
                    backgroundColor: "#3e41428c",
                    width: "90.8%",
                    height: "35px",
                    color: "white",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "5px",
                    borderRadius: "0 0 10px 10px",
                }}>
                    {moment(data?.date).format('MMMM DD, YYYY')}
                </div>
            </div>

            <div className="my-1">

                <Row className="mx-4 gx-0 my-1" >
                    <Col className="fw-semibold" style={{
                        fontSize: "16px",
                        textAlign: "left"
                    }}>{data?.eventName}</Col>

                </Row>
                <Row className="mx-4 gx-0" style={{ color: "#989090" }}>
                    <Col xs={6} md={6} lg={5} style={{
                        fontSize: "12px",
                        textAlign: "left",
                        alignSelf: "center"
                    }}><FaLocationDot style={{
                        fontSize: "large"
                    }} /> {data?.cityName}</Col>
                    <Col xs={6} md={6} lg={7} className="" style={{
                        fontSize: "12px",
                        textAlign: "right",
                        alignSelf: "flex-end"

                    }}>{data?.weather}|{data?.distanceKm.substr(0, 2)}Km</Col>
                </Row>
            </div>
        </div>
    );
};
