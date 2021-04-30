import React from 'react';
import PropTypes from 'prop-types';
import FetchButton from './common/Button';
import Container from './common/ComponentContainer';
import styled from 'styled-components';

const FileName = styled.div`
  color: #6e2c5e;
`;

function DataFetcher({ handleOnFetch, fileName }) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programmatically click the hidden file input element when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <h3>Process the input into a tree</h3>
      <FileName>{fileName}</FileName>
      <FetchButton onClick={handleClick} id="fetcher">
        Fetch
      </FetchButton>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleOnFetch}
        style={{ display: 'none' }}
        accept=".json"
      />
    </Container>
  );
}

DataFetcher.propTypes = {
  handleOnFetch: PropTypes.func.isRequired,
  fileName: PropTypes.string,
};

export default DataFetcher;
