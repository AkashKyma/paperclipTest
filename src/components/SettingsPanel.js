import React from 'react';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

const SettingsTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
`;

const SettingsPanel = () => {
  return (
    <SettingsWrapper>
      <SettingsTitle>Settings</SettingsTitle>
      <p>Configure your preferences here.</p>
      {/* Add Settings fields */}
    </SettingsWrapper>
  );
};

export default SettingsPanel;
