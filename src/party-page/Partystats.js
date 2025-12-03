import { useParams } from "react-router-dom";

const PartyDetailsPage = () => {
  const { partyName } = useParams();

  return (
    <div className="party-details-page">
      <h1>{partyName} - Party Details</h1>
      <p>Here you can display vote count, wards won, candidates, etc.</p>
    </div>
  );
};

export default PartyDetailsPage;
