import React from 'react';
import styled from 'styled-components';
import DataFetcher from './components/DataFetcher';
import TreeText from './components/TreeText';

const StyledAppContainer = styled.h1`
  background-color: #fafafa;
  flex-direction: flex;
  flex: 1;
`;

const Title = styled.h1`
  color: #6e2c5e;
`;

function AppContainer() {
  const [fileName, setFileName] = React.useState('');
  const [treeText, setTreeTex] = React.useState('');

  const handleOnFetch = (event) => {
    try {
      const fileUploaded = event.target.files;
      if (fileUploaded.length <= 0) return;

      setFileName(fileUploaded[0].name);
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        console.log({ event });
        const result = JSON.parse(event.target.result);
        const formatted = JSON.stringify(result, null, 2);
        setTreeTex(formatted);
      };

      fileReader.readAsText(fileUploaded.item(0));
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <StyledAppContainer>
      <Title>Tree Traversal</Title>
      <DataFetcher handleOnFetch={handleOnFetch} fileName={fileName} />
      <TreeText
        handleOnChange={setTreeTex}
        treeText={treeText}
        handleOnProcess={() => {}}
      />
    </StyledAppContainer>
  );
}

export default AppContainer;
