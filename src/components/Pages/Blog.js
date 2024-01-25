import React from "react";
import Title from "../Title";
import Episode from "../Episode";
import User from "../User";

export const Blog = () => {
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
      }}
    >
      <Title titleOfPart="PARTICIPANTS" />

      <User />
    </div>
  );
};
