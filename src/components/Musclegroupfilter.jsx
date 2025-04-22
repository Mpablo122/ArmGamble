import React from 'react';

const Musclegroupfilter = ({ muscleGroups, selectedGroup, onSelectGroup }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <label htmlFor="muscle-group" style={{ marginRight: '1rem' }}>
        Filter by Muscle Group:
      </label>
      <select
        id="muscle-group"
        value={selectedGroup}
        onChange={(e) => onSelectGroup(e.target.value)}
        style={{ padding: '0.5rem', borderRadius: '4px' }}
      >
        <option value="">All</option>
        {muscleGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Musclegroupfilter;