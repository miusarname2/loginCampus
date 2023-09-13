import React from "react";
import BtnL from './btn'

export default function logInBtn() {
  return (
    <div className="flex items-center justify-between">
      <BtnL textContent="Sign In" typeBtn="submit" />
      <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  );
}
