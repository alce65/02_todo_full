import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Login } from "./login.js";
export function UserButtons() {
  const user = useSelector((state) => state.user);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setShowLogin(!user.isLogged);
  }, [user]);

  const handleLogin = () => {
    if (user.isLogged) {
      console.log("LogOut");
    } else {
      console.log("Login");
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

      {showLogin && <Login />}
    </div>
  );
}
