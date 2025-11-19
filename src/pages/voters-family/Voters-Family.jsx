import React from 'react';
import Header from '../../components/voters_family/Headers';  // Import the Header component
import Tabs from '../../components/voters_family/Tabs';      // Import the Tabs component
import AddMemberButton from '../../components/voters_family/Add_Member';  // Import the AddMemberButton component
import FamilyItem from '../../components/voters_family/FamilyItem';  // Import the FamilyItem component
import './Voters-Family.css';  // Import the CSS

export default function FamilyList() {
  const members = [
    { name: "वाच भास्कर", relation: "नाते. वडील, वय. ६५" },
    { name: "वाच मंदाकिनी", relation: "नाते. आई, वय. ६०" },
    { name: "वाच सारिका", relation: "नाते. पत्नी, वय. ४८" },
    { name: "वाच शुभम", relation: "नाते. मुलगा, वय. २२" },
  ];

  return (
    <div className="container">
      {/* Header */}
      <Header title="वाच शिवानंद भास्कर" />

      {/* Tabs */}
      <Tabs />

      {/* Content */}
      <div className="content">
        {/* Add Member Button */}
        <AddMemberButton />

        {/* Family List */}
        <div className="family-list-card">
          {members.map((member, i) => (
            <FamilyItem key={i} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
