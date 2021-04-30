import styled from 'styled-components';

const StyledComponentContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 0.5rem;
  }
`;

export default StyledComponentContainer;
