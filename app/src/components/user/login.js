import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/user";
import * as actions from "../../redux/user/action-creators";

export function Login({ setShowLogin }) {
  const [user, setUser] = useState({ name: "", passwd: "" });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const result = await login(user);
      console.log(result.data);
      dispatch(actions.login({ ...result.data, isLogged: true }));
      setShowLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setShowLogin(false);
  };

  return (
    <form>
      <fieldset>
        <legend>Login</legend>
        <input
          type="text"
          name="name"
          placeholder="user name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwd"
          placeholder="password"
          value={user.passwd}
          onChange={handleChange}
        ></input>
      </fieldset>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      <button type="reset" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
