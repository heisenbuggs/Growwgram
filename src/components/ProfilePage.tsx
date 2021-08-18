import "./ProfilePage.css";
import React, { useEffect } from "react";
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

  useEffect(() => {
    fetchUser(username);
    fetchAUserPosts(username, 0);
    return () => {
      clearUser();
      clearUserPosts();
    };
  }, [clearUserPosts, clearUser, fetchUser, username]);

  const userIsEmpty =
    Object.keys(user).length === 0 && user.constructor === Object;

  console.log(userPosts);

  if (userIsEmpty) return <div />;
  return (
    <Container className="mainClass">
      <Row>
        <Col md={2}></Col>
        <Col xs={4} md={2} className="topCol">
          <img
            src={user.profile_image.large}
            className="profileMainImage"
            alt="profile"
          />
        </Col>
        <Col xs={6} md={4} className="topCol">
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
        <Col md={2} className="topCol" />
      </Row>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <div className="postsGrid">
            {userPosts.map((post) => (
              <img
                key={post.id}
                src={post.urls.regular}
                alt="gridpost"
                className="imgGrid"
              />
            ))}
          </div>
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
