import styled from "styled-components";
import { commonButtonStyles } from "../../commonStyles";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: var(--section-shadow);
`;

export const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.h3`
  font-weight: 300;
  font-size: 1rem;
`;

export const Select = styled.select`
  border: none;
  outline: 1px solid var(--grey);
  background-color: transparent;
  font-size: 0.9rem;
  padding: 0.2rem;
  cursor: pointer;
  position: relative;
  transition: outline-color 250ms linear;

  &:focus {
    outline-color: var(--secondary-color);
  }
`;

export const Button = styled.button`
  ${commonButtonStyles}
`;
