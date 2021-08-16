import "./ProfilePage.css";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import profile from "../assets/profile.png";
import { Icon } from "@iconify/react";

const ProfilePage = () => {
  return (
    <Container className="mainClass">
      <Row>
        <Col xs={2}></Col>
        <Col xs={2} className="topCol">
          <img src={profile} className="profileMainImage" alt="profile" />
        </Col>
        <Col xs={4} className="topCol">
          <div className="profileNameRow">
            <h3 className="profileNameMain">thereal_prasuk</h3>
            <Icon icon="bytesize:settings" style={{ fontSize: 22 , marginTop: 7}} />
          </div>
          <div className="detailsRow">
              <h4 className="number">36 <span className="tag">posts</span></h4>
              <h4 className="number">645 <span className="tag">followers</span></h4>
              <h4 className="number">267 <span className="tag">following</span></h4>
          </div>
          <h3 className="name">Prasuk Jain</h3>
          <h3 className="bio">Hello Everyone!!</h3>
          <h3 className="bio">This is my amazing bio!!</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
