import "./ProfilePage.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import profile from "../assets/profile.png";
import { Icon } from "@iconify/react";
import { storeState, user } from "../utils/FeedTypes";
import { connect } from "react-redux";
import { clearUser, fetchUser, clearUserPosts } from "../redux/actions";
import { useParams } from "react-router-dom";

type paramTypes = {
  username: string;
};

type propTypes = {
  clearUser: () => void;
  clearUserPosts: () => void;
  fetchUser: (username: string) => void;
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
  error,
}: propTypes) => {
  const { username } = useParams<paramTypes>();

  useEffect(() => {
    fetchUser(username);
    return () => {
      clearUser();
      clearUserPosts();
    };
  }, [clearUserPosts, clearUser, fetchUser, username]);

  const userIsEmpty = Object.keys(user).length === 0 && user.constructor === Object;


  if(userIsEmpty) return (<div />);
  return (
    <Container className="mainClass">
      <Row>
        <Col md={2}></Col>
        <Col xs={4} md={2} className="topCol">
          <img src={user.profile_image.large} className="profileMainImage" alt="profile" />
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
          <h3 className="bio">{`${user.bio}`}</h3>
          <h3 className="bio">{`${user.location}`}</h3>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: storeState) => {
  const { user, error } = state;
  return { user: user, error: error };
};

export default connect(mapStateToProps, {
  fetchUser,
  clearUser,
  clearUserPosts,
})(ProfilePage);
