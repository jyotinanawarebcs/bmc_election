import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "../css/WardResultScreen.css";


const partySymbols = {
  BJP: "https://upload.wikimedia.org/wikipedia/commons/e/e8/BJP_election_symbol.png",
  Congress:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/800px-Hand_INC.svg.png",
  "Shiv Sena":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/1280px-Indian_Election_Symbol_Bow_And_Arrow.svg.png",
  NCP: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nationalist_Congress_Party_symbol.svg",
  SP: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png",
  MNS: "https://upload.wikimedia.org/wikipedia/en/9/9b/Maharashtra_Navnirman_Sena_logo.png",
};

const defaultSymbol =
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/No_image_available_2.png";

const WardResultScreen = ({ full2012Data, partyColors }) => {
  const { wardId } = useParams();
  const fullWard = full2012Data?.[wardId];
  const location = useLocation();
  const { geoData, clickedWardData } = location.state;

  const geoWard = geoData?.features?.find(
    (f) => f.properties.PRABHAG_NO == wardId
  );
  const clickedWardData1 = { ...geoWard?.properties, ...fullWard };

  if (!clickedWardData) {
    return (
      <div className="ward-center">
        <p className="info-text">No data found for Ward {wardId}</p>
      </div>
    );
  }

  // ✅ Real Winner
  const caste = clickedWardData.Caste || "default caste";
  const party = clickedWardData1.party || "Independent";
  const votes = clickedWardData1.votes || 0;
  const symbol = partySymbols[party] || defaultSymbol;

  // ✅ Dummy Runner-ups
  const dummyCandidates = [
    {
      title: "1st Runner-up",
      name: "Dummy Candidate 1",
      caste: "OBC",
      party: "Congress",
      ward: wardId,
      votes: 850,
    },
    {
      title: "2nd Runner-up",
      name: "Dummy Candidate 2",
      caste: "SC",
      party: "Shiv Sena",
      ward: wardId,
      votes: 670,
    },
  ];

  // ✅ Dummy polling booth data (10 booths)
  const dummyBooths = Array.from({ length: 10 }, (_, i) => ({
    booth: `Booth ${i + 1}`,
    votes: Math.floor(Math.random() * 300 + 100),
    margin: Math.floor(Math.random() * 50 + 10), // margin between 10–60 votes
  }));

  return (
    <div className="three-section-container">
      {/* Winner Card */}
      <div className="ward-section winner">
        <h2 className="ward-title">Winner</h2>

        <div className="ward-row">
          <img src={symbol} alt={party} className="ward-logo" />
          <div className="ward-details">
            <h3 className="ward-name">{clickedWardData.Corporator}</h3>
            <p>
              <strong>Caste:</strong> {caste}
            </p>
            <p>
              <strong>Ward No:</strong> {clickedWardData.PRABHAG_NO}
            </p>
          </div>
        </div>

        <hr className="divider" />

        <p>
          <strong>Party:</strong>{" "}
          <span style={{ color: partyColors?.[party] || "#000" }}>
            {party}
          </span>
        </p>
        <p>
          <strong>Votes:</strong> {votes.toLocaleString()}
        </p>

        {/* ✅ Booth Table with 3 columns */}
        <h4 className="booth-title">Polling Booth Results</h4>
        <div className="booth-table">
          <div className="booth-header">
            <span>Booth</span>
            <span>Votes</span>
            <span>Margin</span>
          </div>
          {dummyBooths.map((b, i) => (
            <div className="booth-row" key={i}>
              <span>{b.booth}</span>
              <span>{b.votes}</span>
              <span>{b.margin}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Dummy Runner-ups with same layout */}
      {dummyCandidates.map((runner, i) => {
        const symbol = partySymbols[runner.party] || defaultSymbol;
        return (
          <div key={i} className="ward-section runner">
            <h2 className="ward-title">{runner.title}</h2>

            <div className="ward-row">
              <img src={symbol} alt={runner.party} className="ward-logo" />
              <div className="ward-details">
                <h3 className="ward-name">{runner.name}</h3>
                <p>
                  <strong>Caste:</strong> {runner.caste}
                </p>
                <p>
                  <strong>Ward No:</strong> {runner.ward}
                </p>
              </div>
            </div>

            <hr className="divider" />

            <p>
              <strong>Party:</strong>{" "}
              <span style={{ color: partyColors?.[runner.party] || "#000" }}>
                {runner.party}
              </span>
            </p>
            <p>
              <strong>Votes:</strong> {runner.votes.toLocaleString()}
            </p>

            <h4 className="booth-title">Polling Booth Results</h4>
            <div className="booth-table">
              <div className="booth-header">
                <span>Booth</span>
                <span>Votes</span>
                <span>Margin</span>
              </div>
              {dummyBooths.map((b, j) => (
                <div className="booth-row" key={j}>
                  <span>{b.booth}</span>
                  <span>{b.votes}</span>
                  <span>{b.margin}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WardResultScreen;
