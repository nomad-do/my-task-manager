import React from 'react';
const TaskTableHeader = () => (
  <thead>
    <tr>
      <th style={{ width: '20%' }}>Task Name</th>
      <th style={{ width: '15%' }}>Urgency</th>
      <th style={{ width: '15%' }}>Importance</th>
      <th style={{ width: '15%' }}>Effort</th>
      <th style={{ width: '20%' }}>Total Score</th>
      <th style={{ width: '15%' }}>Actions</th>
    </tr>
  </thead>
);

export default TaskTableHeader;
