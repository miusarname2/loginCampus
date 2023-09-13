import React from "react";

export default function TextPrev({textContent,fors}) {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={fors}>
      {textContent}
    </label>
  );
}
