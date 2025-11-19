import React from 'react';

const FamilyItem = ({ member }) => {
  return (
    <div className="family-item">
      <div className="left-section">
        <div className="avatar">
          {member.name.charAt(3)} {/* Display first letter of name */}
        </div>
        <div className="info">
          <div className="name">{member.name}</div>
          <div className="relation">{member.relation}</div>
        </div>
      </div>
      <svg className="arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default FamilyItem;
