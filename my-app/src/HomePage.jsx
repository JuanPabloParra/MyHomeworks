

import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
export const HomePage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>Welcome, {currentUser.username}!</div>
    </>
  );
};
