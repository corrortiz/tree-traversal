import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProcessButton from './common/Button';
import Container from './common/ComponentContainer';

const TextArea = styled.textarea`
  max-width: 40rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

function TreeText({ treeText, handleOnChange, handleOnProcess }) {
  return (
    <Container>
      <TextArea
        onChange={handleOnChange}
        value={treeText}
        rows={15}
        cols={30}
      />
      <ProcessButton onClick={handleOnProcess}>Process</ProcessButton>
    </Container>
  );
}

TreeText.propTypes = {
  treeText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnProcess: PropTypes.func.isRequired,
};

export default TreeText;
