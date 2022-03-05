import React from "react";
import "./Invitation.css";
import video from "./invite_video.mp4";

export default function Invitation() {
  return (
    <div className="Invitation video-container">
      <video controls autoPlay loop playsInline src={video}></video>
    </div>
  );
}
