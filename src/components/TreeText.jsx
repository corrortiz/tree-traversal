import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProcessButton from './common/Button';
import Container from './common/ComponentContainer';

const TextArea = styled.textarea`
  max-width: 40rem;
`;

function TreeText({ treeText, handleOnChange, handleOnProcess }) {
  return (
    <Container>
      <TextArea
        onChange={handleOnChange}
        value={treeText}
        rows={25}
        cols={100}
      />
      <ProcessButton onClick={handleOnProcess}>Process</ProcessButton>
    </Container>
  );
}

TreeText.propTypes = {
  treeText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.string.isRequired,
  handleOnProcess: PropTypes.string.isRequired,
};

export default TreeText;
