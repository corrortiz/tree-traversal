import styled from 'styled-components';

const StyledComponentContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
  }
`;

export default StyledComponentContainer;
