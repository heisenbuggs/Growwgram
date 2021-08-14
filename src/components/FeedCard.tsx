import { Icon } from "@iconify/react";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import profile from "../assets/profile.png";
import post from "../assets/scene.jpeg";
import "./FeedCard.css";

const FeedCard = () => {
  return (
    <Container className="feedcardContainer">
      <Col xs={12} className="feedcardHeader">
        <div className="headerLeft">
          <img src={profile} className="profileImg" alt="img" />
          <div className="infosec">
            <h4 className="profileName">thereal_prasuk</h4>
            <h4 className="location">Bhopal, Madhya Pradesh</h4>
          </div>
        </div>
        <div>
          <Icon icon="ph:dots-three" style={{ fontSize: 40 }} />
        </div>
      </Col>
      <Col xs={12}>
        <img src={post} alt="post" className="post" />
      </Col>
      <div className="posticonGroup">
        <div>
          <Icon
            icon="ant-design:heart-outlined"
            style={{ fontSize: 30, marginRight: 10 }}
          />
          <Icon
            icon="fa-regular:comment"
            style={{ fontSize: 27, marginRight: 10 }}
          />
          <Icon icon="cil:send" style={{ fontSize: 27, marginRight: 10 }} />
        </div>
        <div>
          <Icon icon="bi:bookmark" style={{ fontSize: 25 }} />
        </div>
      </div>
      <div className="likesCount">31,435 likes</div>
      <div className="profileNameFeed">thereal_prasuk<span className="caption">Hello There!! This is my caption.</span></div>
      <div className="viewComment">View all 531 Comments</div>
    </Container>
  );
};

export default FeedCard;
