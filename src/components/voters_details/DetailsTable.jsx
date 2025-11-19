import React from "react";

export default function DetailsTable() {
  return (
    <div className="details-table">

      <div className="detail-row">
        <span className="label">रिलेटिव्ह चे नाव</span>
        <span className="value">उनडकट सोनल बिपिन</span>
      </div>

      <div className="detail-row">
        <span className="label">गाव</span>
        <span className="value">मुंबई</span>
      </div>

      <div className="detail-row">
        <span className="label">मतदान कार्ड</span>
        <span className="value">ZUL1284405</span>
      </div>

      <div className="detail-row">
        <span className="label">विधानसभा क्र</span>
        <span className="value">17/165/72</span>
      </div>

      <div className="detail-row">
        <span className="label">घर क्र</span>
        <span className="value">Du 5</span>
      </div>

      <div className="detail-row address-row">
        <span className="label">पत्ता</span>
        <span className="value">यादी भाग क्र. 165 : मुंबई</span>
      </div>

    </div>
  );
}
