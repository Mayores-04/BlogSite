import React from 'react';
import { Link, useLocation } from 'react-router-dom';  
import PostInteractions from '../../components/PostInteractions/PostInteractions';
import Image from '../../components/Image';
import Comments from '../../components/coments/comments';
import "../postPage/postPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PostPage = () => {
  const location = useLocation();
  const item = location.state?.item;  

  if (!item) {
    return <p>Post not found</p>; 
  }

  return (
    <div className="post-container">
      <div className="post-card">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faArrowLeft} size='xl' />
        </Link>
        
        {/* Left: Image Section */}
        <div className="post-image">
          <Image path={item.media} alt="" />
        </div>

        {/* Right: Post Details */}
        <div className="post-details">
          <PostInteractions />

          {/* User Info */}
          <div className="post-user">
            <Link to="/john" className="user-info">
              <Image path="/general/noAvatar.png" className="user-avatar" />
              <span className="user-name">John Doe</span>
            </Link>
          </div>

          {/* Comments Section */}
          <div className="post-comments">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
