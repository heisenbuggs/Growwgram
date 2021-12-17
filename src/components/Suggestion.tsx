import './Suggestion.css';

import { useHistory } from 'react-router-dom';

import { post } from '../utils/FeedTypes';

type MyProps = {
  post: post;
};

const Suggestion = ({post}: MyProps) => {
  let history = useHistory();
  return (
    <div className="suggestionsRow">
      <div>
        <img src={post.user.profile_image.large} alt="suggestProfile" className="suggestProfile" />
        <h5 className="profileNameSuggestion" onClick={() => history.push("/"+post.user.username)}>{post.user.username}</h5>
      </div>
      <h5 className="suggestionsFollow">Follow</h5>
    </div>
  );
};

export default Suggestion;
