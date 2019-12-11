import { useEffect } from "react";

const Logout = ({ message, redirect, logoutRequest, logoutRequestEnded }) => {

  useEffect(() => {
    if (message) console.log(message)
    return () => {
      logoutRequestEnded();
    };
  }, []);

  return (
    <>
      <button onClick={logoutRequest}>Logout</button>
    </>
  )
}

export default Logout