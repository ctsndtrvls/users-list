import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
      headers: {
        "app-id": "629c6413720007a945062d5e"
      }
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      });

    fetch(`https://dummyapi.io/data/v1/user/${userId}/post?limit=10`, {
      headers: {
        "app-id": "629c6413720007a945062d5e"
      }
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("posts: ", data);
        setCurrentUserPosts(data.data);
      });
  }, []);
  if (!currentUser) {
    return "loading...";
  }

  return (
    <div>
      <img src={currentUser.picture} />
      <div>
        {currentUser.firstName}
        {currentUser.LastName}
        {currentUserPosts.map((post) => {
          return (
            <div key={post.id}>
              <img src={post.image} width="150px" />
              <div>{post.likes}</div>
              <div>{post.text}</div>
              {post.tags.map((tag) => {
                return <div>{tag}</div>;
              })}
              <div>{new Date().toGMTString(post.publishDate)}</div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}
