import React from 'react';
import Agent from './Agent';

function AgentList() {
  const agents = ['Agent A', 'Agent B', 'Agent C'];

  return (
    <div>
      <h3>Agents</h3>
      <ul>
        {agents.map((agent, index) => (
          <Agent key={index} name={agent} />
        ))}
      </ul>
    </div>
  );
}

export default AgentList;