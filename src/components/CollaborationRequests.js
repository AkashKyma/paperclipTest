import React from 'react';
import styled from 'styled-components';

const CollaborationWrapper = styled.div`
  padding: 20px;
  background-color: #e9f7ef;
  border-radius: 10px;
`;

const CollaborationTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const RequestItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #white;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CollaborationRequests = ({ requests }) => {
  return (
    <CollaborationWrapper>
      <CollaborationTitle>Collaboration Requests</CollaborationTitle>
      {requests.map((request, index) => (
        <RequestItem key={index}>{request}</RequestItem>
      ))}
    </CollaborationWrapper>
  );
};

export default CollaborationRequests;
