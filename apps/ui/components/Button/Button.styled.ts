import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgb(0 0 0 / 20%);
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  color: #fff;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover:enabled {
    background-color: rgb(0 0 0 / 30%);
    transform: scale(1.02);
  }

  &:disabled {
    background-color: rgb(0 0 0 / 10%);
    cursor: not-allowed;
  }
`;

export { StyledButton };
