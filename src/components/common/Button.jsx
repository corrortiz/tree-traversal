import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  border: 2px solid #fafafa;
  border-radius: 1rem;
  background-color: #6e2c5e;
  color: #fafafa;
  max-width: 10rem;

  &:hover {
    box-shadow: 2px 4px #888888;
  }
`;

export default StyledButton;
