import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Comments } from "../components/Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!props.location.data) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    }
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  return (
    <>
      <div id="link">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} className="arrowLeft" />
          Back
        </Link>
      </div>

      <div className="postWrapper">
        <div id="post">
          <h1>
            {props.location.data ? props.location.data.title : post.title}
          </h1>
          <p>{props.location.data ? props.location.data.body : post.body}</p>
        </div>

        <div>
          {comments.map((comment, i) => (
            <Comments {...comment} key={i} />
          ))}
        </div>

      </div>
    </>
  );
};

export { Post };
