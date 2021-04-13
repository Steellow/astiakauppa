import React from "react";
import LogIn from "../components/LogIn";

export default function LogInPage({setUser}) {

  return (
    <div className="row">
      <LogIn setUser={setUser}/>
    </div>
  );
}
