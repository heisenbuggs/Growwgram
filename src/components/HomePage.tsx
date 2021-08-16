import './HomePage.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import FeedCard from './FeedCard';
import StoryProfile from './StoryProfile';

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
          <Row>
            <Col xs={6} className="suggestions">Suggestions for You</Col>
            <Col xs="auto"></Col>
            <Col xs={4} className="seeAll">See all</Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
