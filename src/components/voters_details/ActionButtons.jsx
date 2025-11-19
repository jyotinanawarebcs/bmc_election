import React from "react";
import { Share2, Printer, Phone } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="action-buttons">

      <button className="btn btn-forward">
        <Share2 size={20} /> पाठवा
      </button>

      <button className="btn btn-print">
        <Printer size={20} /> प्रिंट
      </button>

      <button className="btn btn-call">
        <Phone size={20} /> कॉल करा
      </button>

    </div>
  );
}
