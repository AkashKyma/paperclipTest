import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EarningsWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const EarningsTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const EarningsDetail = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;

const EarningsSection = ({ earnings }) => {
  return (
    <EarningsWrapper>
      <EarningsTitle>Earnings Breakdown</EarningsTitle>
      {earnings.map((earning, index) => (
        <EarningsDetail key={index}>{earning.description}: ${earning.amount}</EarningsDetail>
      ))}
    </EarningsWrapper>
  );
};

EarningsSection.propTypes = {
  earnings: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default EarningsSection;
