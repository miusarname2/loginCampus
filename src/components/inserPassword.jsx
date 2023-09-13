import React from "react";
import Labels from './label'
import Text from './pre'

export default function InserPassword() {
  return (
    <div className="mb-6">
      <Text textContent="Password" fors="password" />
      <Labels
        placeholders="******************"
        types="password"
        ids="password"
      />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
  );
}
