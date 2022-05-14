import React from "react";
import "./Photos.css";

export default function Photos() {
  return (
    <div className="Photos">
      <p>
        Have some photos from the party? Share them with Elaine
        <a
          href="https://photos.app.goo.gl/dM5FpJGDCMmjeEru5"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          here
        </a>
      </p>
    </div>
  );
}
