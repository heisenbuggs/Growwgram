import "./HomePage.css";

import { Col, Container, Row } from "reactstrap";

import FeedCard from "./FeedCard";
import StoryProfile from "./StoryProfile";
import Suggestion from "./Suggestion";
import { connect } from "react-redux";
import { post, storeState } from "../utils/FeedTypes";
import { fetchPosts, clearPosts } from "../redux/actions";
import { useEffect } from "react";

type MyProps = {
  fetchPosts: (page: number) => void;
  clearPosts: () => void;
  posts: post[];
  err: {
    err: boolean;
    errMessage: string;
  };
};

const HomePage = (props: MyProps) => {
  useEffect(() => {
    props.fetchPosts(0);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={7} className="leftFeedPane">
          <Col md={12} className="storyNav">
            {props.posts.map((post) => (
              <StoryProfile key={post.id} post={post} />
            ))}
          </Col>
          <Col md={12} className="">
            {props.posts.map((post) => (
              <FeedCard key={post.id} post={post} />
            ))}
          </Col>
        </Col>
        <Col md={3} className="rightDetailsPane">
          <div className="rowsuggest">
            <h4 className="suggestions">Suggestions for You</h4>
            <h4 className="seeAll">See All</h4>
          </div>
          {props.posts.map((post) => (
            <Suggestion key={post.id} post={post} />
          ))}
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: storeState) => {
  return { posts: state.posts, err: state.error };
};

export default connect(mapStateToProps, {
  fetchPosts,
  clearPosts,
})(HomePage);
