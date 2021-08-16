import "./HomePage.css";

import React from "react";

import { Col, Container, Row } from "reactstrap";

import FeedCard from "./FeedCard";
import StoryProfile from "./StoryProfile";
import Suggestion from "./Suggestion";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={7} className="leftFeedPane">
          <Col md={12} className="storyNav">
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
            <StoryProfile />
          </Col>
          <Col md={12} className="">
            <FeedCard />
          </Col>
        </Col>
        <Col md={3} className="rightDetailsPane">
          <div className="rowsuggest">
            <h4 className="suggestions">Suggestions for You</h4>
            <h4 className="seeAll">See All</h4>
          </div>

          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
