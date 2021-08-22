import "./ProfilePage.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Icon } from "@iconify/react";
import { post, storeState, user } from "../utils/FeedTypes";
import { connect } from "react-redux";
import {
  clearUser,
  fetchUser,
  clearUserPosts,
  fetchAUserPosts,
} from "../redux/actions";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderAsset from "./Loader";
import { setPriority } from "os";
import FeedCard from "./FeedCard";

type paramTypes = {
  username: string;
};

type propTypes = {
  clearUser: () => void;
  clearUserPosts: () => void;
  fetchUser: (username: string) => void;
  userPosts: post[];
  fetchAUserPosts: (username: string, page: number) => void;
  user: user;
  error: {
    err: boolean;
    errMessage: string;
  };
};

const ProfilePage = ({
  clearUser,
  clearUserPosts,
  fetchUser,
  user,
  fetchAUserPosts,
  userPosts,
  error,
}: propTypes) => {
  const { username } = useParams<paramTypes>();
  const [page, setPage] = useState(0);
  const [isGrid, setGrid] = useState(0);

  useEffect(() => {
    fetchUser(username);
    fetchAUserPosts(username, 0);
    return () => {
      clearUser();
      clearUserPosts();
    };
  }, [clearUserPosts, clearUser, fetchUser, username]);

  const fetchMorePosts = () => {
    fetchAUserPosts(username, page);
    setPage(page + 1);
  };

  const userIsEmpty =
    Object.keys(user).length === 0 && user.constructor === Object;

  if (userIsEmpty) return <div />;
  return (
    <Container className="mainClass">
      <Row>
        <Col lg={1} xl={2}></Col>
        <Col xs={5} md={4} lg={3} xl={2} className="topCol">
          <img
            src={user.profile_image.large}
            className="profileMainImage"
            alt="profile"
          />
        </Col>
        <Col xs={7} md={6} lg={5} xl={4} className="topCol">
          <div className="profileNameRow">
            <h3 className="profileNameMain">{user.username}</h3>
            <Icon
              icon="bytesize:settings"
              style={{ fontSize: 22, marginTop: 7 }}
            />
          </div>
          <div className="detailsRow">
            <h4 className="number">
              {user.total_photos} <span className="tag">posts</span>
            </h4>
            <h4 className="number">
              {user.followers_count} <span className="tag">followers</span>
            </h4>
            <h4 className="number">
              {user.following_count} <span className="tag">following</span>
            </h4>
          </div>
          <h3 className="name">{`${user.first_name} ${user.last_name}`}</h3>
          <h3 className="bio">{user.bio ? `${user.bio}` : ""}</h3>
          <h3 className="bio">{user.location ? `${user.location}` : ""}</h3>
        </Col>
        <Col xs={12} lg={1} xl={2} className="topCol smallSize" />
      </Row>
      <Row>
        <Col lg={1} xl={2}></Col>
        <Col xs={12} md={10} lg={9} xl={8}>
          <Row className="RowMargin">
            <Col xs={6} onClick={() => setGrid(1)}>
              <div
                className="profileNav"
                style={{ color: isGrid ? "black" : "grey" }}
              >
                {" "}
                <Icon
                  icon="bx:bx-grid"
                  style={{ fontSize: 24, color: isGrid ? "black" : "grey" }}
                />{" "}
                GRID
              </div>
            </Col>
            <Col xs={6} onClick={() => setGrid(0)}>
              <div
                className="profileNav"
                style={{ color: !isGrid ? "black" : "grey" }}
              >
                {" "}
                <Icon
                  icon="icon-park-outline:picture-one"
                  style={{ fontSize: 22, color: !isGrid ? "black" : "grey" }}
                />{" "}
                POSTS
              </div>
            </Col>
          </Row>
          <InfiniteScroll
            dataLength={userPosts.length}
            next={fetchMorePosts}
            hasMore={true}
            loader={<LoaderAsset />}
          >
            {isGrid ? (
              <div className="postsGrid">
                {userPosts.map((post) => (
                  <div className="imgCont">
                    <img
                      key={post.id}
                      src={post.urls.regular}
                      alt="gridpost"
                      className="imgGrid"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {userPosts.map((post) => (
                  <FeedCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </InfiniteScroll>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: storeState) => {
  const { user, error, userPosts } = state;
  return { userPosts: userPosts, user: user, error: error };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchAUserPosts,
  clearUser,
  clearUserPosts,
})(ProfilePage);
