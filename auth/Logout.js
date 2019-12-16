import { useEffect } from "react";

const Logout = ({ message, redirect, logoutRequest, }) => {

  return (
    <>
      <div onClick={logoutRequest}>Logout</div>
    </>
  )
}

export default Logout