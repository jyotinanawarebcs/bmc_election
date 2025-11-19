import React from "react";
import { Phone, MessageSquare, Copy, Share2 } from "lucide-react";

export default function VoterActions() {
  return (
    <div className="voter-actions">
      <button className="action-btn call-btn">
        <Phone size={40} />
      </button>

      <button className="action-btn">
        <MessageSquare size={40} />
      </button>

      <button className="action-btn">
        <Copy size={40} />
      </button>

      <button className="action-btn">
        <Share2 size={40} />
      </button>
    </div>
  );
}
