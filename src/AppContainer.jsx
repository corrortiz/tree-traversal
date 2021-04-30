import { useState, useRef } from 'react';
import styled from 'styled-components';
import DataFetcher from './components/DataFetcher';
import TreeText from './components/TreeText';
import Output from './components/Output';
import treeNodeFormatter from './utils/treeNodeFormatter';

const StyledAppContainer = styled.div`
  padding: 1rem 3rem;
`;

const Title = styled.h1`
  color: #6e2c5e;
  margin: 0;
`;

function AppContainer() {
  const [fileName, setFileName] = useState('');
  const [treeText, setTreeTex] = useState('');
  const [treeData, setTreeData] = useState(null);
  const boxRef = useRef(null);

  const handleOnFetch = (event) => {
    try {
      const fileUploaded = event.target.files;
      if (fileUploaded.length <= 0) return;

      setFileName(fileUploaded[0].name);
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const result = JSON.parse(event.target.result);

        let formatted;
        if (Array.isArray(result)) {
          formatted = JSON.stringify(treeNodeFormatter(result), null, 2);
        } else {
          formatted = JSON.stringify(result, null, 2);
        }

        setTreeTex(formatted);
      };

      fileReader.readAsText(fileUploaded.item(0));
    } catch (error) {
      throw Error(error);
    }
  };

  const handleOnChange = (event) => {
    setTreeTex(event.target.value);
  };

  const handleOnProcess = () => {
    const newTreeData = JSON.parse(treeText);
    const treeArray = Object.entries(newTreeData).map((item) => item);
    treeArray.forEach((branch) => {
      if (branch[0] === 'id') {
        const newElement = document.createElement('div');
        newElement.style.border = '1px solid red';
        newElement.style.margin = '8px';
        newElement.style.textAlign = 'center';
        newElement.innerText = branch[1];
        boxRef.current.appendChild(newElement);
      }
    });
  };

  return (
    <StyledAppContainer>
      <Title>Tree Traversal</Title>
      <DataFetcher handleOnFetch={handleOnFetch} fileName={fileName} />
      <TreeText
        treeText={treeText}
        handleOnChange={handleOnChange}
        handleOnProcess={handleOnProcess}
      />
      <Output treeData={treeData} boxRef={boxRef} />
    </StyledAppContainer>
  );
}

export default AppContainer;
