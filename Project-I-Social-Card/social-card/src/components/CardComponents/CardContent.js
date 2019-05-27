import React from "react";
import "./Card.css";

export default function CardContent({title, link, content}) {
  return (
    <div className="cardContent">
      <h1>{title}</h1>
      <p>
        {content}
      </p>
      <i>{link}</i>
    </div>
  );
}
