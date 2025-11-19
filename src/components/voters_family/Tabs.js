import React from 'react';

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tabs-inner">
        <button className="tab">माहिती</button>
        <button className="tab active">कुटुंब</button>
        <button className="tab">सर्व</button>
      </div>
    </div>
  );
};

export default Tabs;
