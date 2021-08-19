import "./HomePage.css";

import { Col, Container, Row } from "reactstrap";

import FeedCard from "./FeedCard";
import StoryProfile from "./StoryProfile";
import Suggestion from "./Suggestion";
import { connect } from "react-redux";
import { post, storeState } from "../utils/FeedTypes";
import { fetchPosts, clearPosts } from "../redux/actions";
import { useEffect, useState } from "react";
import Loader from "./Loader";

import InfiniteScroll from "react-infinite-scroll-component";
import LoaderAsset from "./Loader";

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
  const [page, setPage] = useState(0);
  useEffect(() => {
    props.fetchPosts(page);
  }, []);

  const fetchNextPage = () => {
    props.fetchPosts(page + 1);
    setPage(page + 1);
  };

  return (
    <Container>
      <Row>
        <Col xs={1} lg={1}></Col>
        <Col xs={10} lg={7} className="leftFeedPane">
          <Col md={12} className="storyNav">
            {props.posts.map((post) => (
              <StoryProfile key={post.id} post={post} />
            ))}
          </Col>
          <Col md={12} className="">
            <InfiniteScroll
              dataLength={props.posts.length}
              next={fetchNextPage}
              hasMore={true}
              loader={<LoaderAsset />}
            >
              {props.posts.map((post) => (
                <FeedCard key={post.id} post={post} />
              ))}
            </InfiniteScroll>
          </Col>
        </Col>
        <Col lg={3} className="rightDetailsPane">
          <div className="rowsuggest">
            <h4 className="suggestions">Suggestions for You</h4>
            <h4 className="seeAll">See All</h4>
          </div>

          {props.posts.map((post) => (
            <Suggestion key={post.id} post={post} />
          ))}
          <h4 className="suggestionsFooter marginFooter">
            About • Help • Press • API • Jobs • Privacy • Terms
          </h4>
          <h4 className="suggestionsFooter">
            Location • Top Accounts • Hashtags • Language
          </h4>
          <h4 className="suggestionsFooter">
            &#169; {new Date().getFullYear()} GROWWGRAM BY GROWW
          </h4>
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
