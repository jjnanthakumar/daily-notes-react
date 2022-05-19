import { css } from "styled-components";

export const commonInputStyles = css`
  appearance: none;
  border: 1px solid var(--grey);
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 10px;
  border-radius: 3px;
  transition: all 300ms linear;

  &:focus {
    border-color: var(--primary-color);
  }
`;

export const commonButtonStyles = css`
  appearance: none;
  border: none;
  outline: none;
  border-radius: 3px;
  background: var(--primary-color);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.4rem 1rem;
  position: relative;
  isolation: isolate;
  box-shadow: var(--box-shadow);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--secondary-color);
    box-shadow: var(--box-shadow-hover);
  }
`;
