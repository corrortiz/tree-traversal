import React from 'react';
import PropTypes from 'prop-types';
import FetchButton from './common/Button';
import Container from './common/ComponentContainer';

function DataFetcher({ handleOnFetch, fileName }) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programmatically click the hidden file input element when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <p>Process the input into a tree</p>
      <p>{fileName}</p>
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
