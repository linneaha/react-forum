import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ body, name, email, id }) => {
  const [likes, setLikes] = useState(false);

  return (
    <div id="comment">
      <p id="commented">
        commented {id} hr. ago
        <span id="heartIcon">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              setLikes(!likes);
            }}
          />
          {likes && <span>Liked!</span>}
        </span>
      </p>

      <div id="commentHeader">
        <img
          id="avatar"
          src="https://www.redditstatic.com/avatars/avatar_default_02_A5A4A4.png"
        ></img>
        <div>
          <h2>{name}</h2>
          <h3>{email}</h3>
        </div>
      </div>
      <p>{body}</p>
    </div>
  );
};

export { Comments };
