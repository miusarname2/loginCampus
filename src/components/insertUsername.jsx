import React from "react";
import Labels from "./label";
import Text from "./pre";

function insertUsername() {
  return (
    <>
      <div className="mb-4">
        <Text textContent="Username" fors="username" />
        <Labels placeholders="username" ids="username" types="text" />
      </div>
    </>
  );
}

export default insertUsername;
