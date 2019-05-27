import React from "react";
import "./Header.css";

export default function HeaderContent({content}) {
  return (
    <div className="headerContent">
      <p>
       {content}
      </p>
    </div>
  );
}

