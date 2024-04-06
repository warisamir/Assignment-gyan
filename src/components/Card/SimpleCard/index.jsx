import React from "react";
import "./index.css";
import moment from 'moment';
import { FaLocationDot } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";

const TrimLink = (url) => {
    let link = url.split("/d/")
    return link[1].split("/")[0];
}

export default ({ data }) => {
    return (
        <div className="card-body" >
            <div className="img-body">
                <img className="card-img" loading="lazy" src={`https://drive.google.com/thumbnail?id=${TrimLink(data.imgUrl)}`} alt="Image" />
            </div>
            <div style={{ zIndex: 100, position: "absolute", bottom: 10, color: "white" }}>

                <Row className="mx-2 gx-0" style={{
                    color: "antiquewhite"
                }}>
                    <Col xs={6} md={7} lg={7} className="fw-semibold" style={{
                        fontSize: "14px",
                        textAlign: "left"
                    }}>{data?.eventName}</Col>

                    <Col xs={6} md={5} lg={5} className="" style={{
                        fontSize: "12px",
                        textAlign: "right",
                        alignSelf: "flex-end"

                    }}>{moment(data?.date).format('MMMM DD,YYYY')}</Col>
                </Row>
                <Row className="mx-2 my-1 gx-0" style={{
                    color: "antiquewhite"
                }}>
                    <Col xs={6} lg={5} style={{
                        fontSize: "11px",
                        textAlign: "left",
                        alignSelf: "center"
                    }}><FaLocationDot /> {data?.cityName}</Col>
                    <Col xs={6} lg={7} className="" style={{
                        fontSize: "11px",
                        textAlign: "right",
                        alignSelf: "flex-end"

                    }}>{data?.weather}|{data?.distanceKm.substr(0, 2)}Km</Col>
                </Row>
            </div>

        </div>
    );
};
