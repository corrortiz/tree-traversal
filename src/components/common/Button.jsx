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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export default StyledButton;
