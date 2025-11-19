import React from "react";
import { Star } from "lucide-react";

export default function ColorCodeSection() {
  return (
    <div className="color-code-section">
      <button className="color-code-btn">Color Code</button>
      <button className="star-btn">
        <Star size={20} />
      </button>
      <button className="interest-btn">इंटर</button>
    </div>
  );
}
