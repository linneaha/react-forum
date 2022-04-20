import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <Link to={{ pathname: `/post/${post.id}`, data: { ...post } }} key={i}>
          <div id="posts">
            <p>r/Lorem_ipsum - posted {post.id} hr. ago</p>
            <h3>{post.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { Home };
