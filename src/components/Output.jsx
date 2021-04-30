import React from 'react';
import PropTypes from 'prop-types';
import ComponentContainer from './common/ComponentContainer';
import styled from 'styled-components';

const OutputContainer = styled.div`
  min-height: 20rem;
  min-width: 30rem;
  background-color: #6187ce;
  border-radius: 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

function Output({ treeData, boxRef }) {
  return (
    <ComponentContainer>
      <h3>Output</h3>
      <OutputContainer ref={boxRef} />
    </ComponentContainer>
  );
}

Output.propTypes = {
  treeData: PropTypes.array,
  boxRef: PropTypes.func,
};

export default Output;
