import React from 'react';
import { Plus } from 'lucide-react';

const AddMemberButton = () => {
  return (
    <div className="add-member-card">
      <button className="add-member-btn">
        <Plus className="plus-icon" />
        नवीन कुटुंब सदस्य जोडा
      </button>
    </div>
  );
};

export default AddMemberButton;
