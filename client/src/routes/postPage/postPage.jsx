import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../../components/Image";
import Comments from "../../components/coments/comments";
import "../postPage/postPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PostInteractions from "../../components/postInteractions/PostInteractions";

const PostPage = () => {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post-container">
      <div className="flex gap-8">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </Link>

        <div className="post-card">
          {/* Left: Image Section */}
          <div className="image-div flex flex-col justify-center w-[50%] rounded-[12px] bg-green-300">
            <div className="post-image">
              <Image path={item.media} alt="" />
            </div>
          </div>

          {/* Right: Post Details */}
          <div className="post-details">
            <PostInteractions />

            {/* User Info */}
            <div className="post-user">
              <Link to="/john" className="user-info">
                <Image path="/general/noAvatar.png" className="user-avatar" />
                <span className="user-name">Jake Mayores</span>
              </Link>
            </div>

            {/* Comments Section */}
            <div className="post-comments">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
