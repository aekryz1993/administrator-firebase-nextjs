import { useEffect } from "react";

const Logout = ({ message, redirect, logoutRequest, logoutRequestEnded, loginRequest }) => {

  useEffect(() => {
    if (message) console.log(message)
    return () => {
      logoutRequestEnded();
    };
  }, []);

  return (
    <>
      <button onClick={logoutRequest}>Logout</button>
      <button onClick={loginRequest}>Login</button>
    </>
  )
}

export default Logout