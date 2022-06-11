import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfilesList() {
  const [usersProfiles, setUsersProfiles] = useState([]);
  const params = useParams();
  const userId = params.userId;
  console.log(params);
  console.log(userId);

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/user?limit=10`, {
      headers: {
        "app-id": "629c6413720007a945062d5e"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsersProfiles(data.data);
      });
  }, []);

  return (
    <div className="App">
      {usersProfiles.map((profile) => {
        return (
          <div>
            <img src={profile.picture} />
            <a href={`/profile/${profile.id}`}>{profile.firstName}</a>
          </div>
        );
      })}
    </div>
  );
}
