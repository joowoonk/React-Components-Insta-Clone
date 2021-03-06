// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLike] = useState(props.post.likes)
  // console.log(props)

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img 
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
          onClick={()=> setLike(likes + 1)}
        />
      </div>
      <LikeSection 
      likes ={props.post.likes} 

      />
      
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        timestamp ={props.post.timestamp}
      />
      </div>
  );
};

export default Post;


