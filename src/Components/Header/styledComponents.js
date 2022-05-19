import styled from "styled-components";
import { commonButtonStyles } from "../../commonStyles";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--white);
  box-shadow: var(--section-shadow);
  isolation: isolate;
  width: ${({ isOpen }) => (isOpen ? "200px" : "fit-content")};
`;

export const Toggle = styled.button`
  ${commonButtonStyles}

  background-color: transparent;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  width: 30px;
  height: 30px;
  padding: 7px;
  border-radius: 50%;
  margin: 5px;

  &:hover {
    background-color: transparent;

    & > span {
      background-color: var(--text-dark);
    }
  }

  & > span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ isOpen }) => (isOpen ? "var(--primary-color)" : "var(--text-light)")};
    margin-top: 3px;
    border-radius: 3px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);

    &:nth-child(1) {
      width: ${({ isOpen }) => (isOpen ? "100%" : "70%")};
      transform: ${({ isOpen }) => isOpen && "translateY(5px) rotate(400deg)"};
    }

    &:nth-child(2) {
      width: 50%;
      transform: ${({ isOpen }) => isOpen && "scale(0)"};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen && "translateY(-6px) rotate(-400deg)"};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-top: 10px;
`;

export const Brand = styled.h1`
  color: var(--text-dark);
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 5px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  text-decoration: none;
  text-transform: capitalize;
  color: hsl(0, 100%, 0%, 0.5);
  padding: 10px 0px 10px 5px;
  position: relative;
  transition: color 250ms linear;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--secondary-color);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
