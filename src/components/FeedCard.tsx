import "./FeedCard.css";

import React from "react";

import { Col, Container } from "reactstrap";

import { Icon } from "@iconify/react";

import { post } from "../utils/FeedTypes";
import { useHistory } from "react-router-dom";

type MyProps = {
  post: post;
};

const FeedCard = ({ post }: MyProps) => {
  let history = useHistory();
  return (
    <Container className="feedcardContainer">
      <Col xs={12} className="feedcardHeader">
        <div className="headerLeft">
          <img
            src={post.user.profile_image.large}
            className="profileImg"
            alt="img"
          />
          <div className="infosec">
            <h4
              className="profileName"
              onClick={() => history.push("/"+post.user.username)}
            >
              {post.user.username}
            </h4>
            <h4 className="location">{post.user.location}</h4>
          </div>
        </div>
        <div>
          <Icon icon="ph:dots-three" style={{ fontSize: 40 }} />
        </div>
      </Col>
      <Col xs={12}>
        <img src={post.urls.full} alt="post" className="post" />
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
      <div className="likesCount">{post.likes} likes</div>
      <div className="profileNameFeed">
        {post.user.username}
        <span className="caption">{post.description}</span>
      </div>
      <div className="viewComment">View all {post.likes} Comments</div>
    </Container>
  );
};

export default FeedCard;
