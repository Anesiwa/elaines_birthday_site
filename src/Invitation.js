import React from "react";
import "./Invitation.css";
import Invite from "./Invite.png";

export default function Invitation() {
  return (
    <div className="Invitation">
      <div>
        <img src={Invite} alt="Elaine's Sassy Sixty Invitation" width={1000} />
        Hello from Invitation
      </div>
    </div>
  );
}
