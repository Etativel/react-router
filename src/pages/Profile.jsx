import { Link, useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <div>
        <p>Where do you wanna go</p>
      </div>
      <ul>
        <li>
          <Link to="/profile/spinach">Spinach page</Link>
        </li>
        <li>
          <Link to="/profile/popeye">Popeye page</Link>
        </li>
      </ul>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
