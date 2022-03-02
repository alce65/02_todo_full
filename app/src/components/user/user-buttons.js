import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./login.js";
import * as actions from "../../redux/user/action-creators";

export function UserButtons() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    if (user.isLogged) {
      dispatch(actions.logout());
    } else {
      setShowLogin(true);
    }
  };

  const handleRegistration = () => {
    console.log("Registration");
  };

  return (
    <div>
      {!showLogin && (
        <button onClick={handleLogin}>
          {user.isLogged ? "Logout" : "Login"}
        </button>
      )}

      {!showLogin && !user.isLogged && (
        <button onClick={handleRegistration}>Registration</button>
      )}

      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
}
