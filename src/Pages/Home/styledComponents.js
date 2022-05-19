import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 10px;
  padding: 0 0 10px;
  overflow: hidden;
`;

export const Info = styled.h3`
  text-align: center;
  font-weight: 400;
  margin-top: 100px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
  font-weight: 600;
  color: var(--text-light);

  &:hover {
    color: var(--secondary-color);
  }
`;
