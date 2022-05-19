import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  max-height: 200px;
  overflow-y: auto;

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Info = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-dark);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: var(--text-light);
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:hover svg {
    fill: var(--secondary-color);
  }
`;

export const Body = styled.div`
  margin-top: 10px;
`;

export const Desc = styled.p`
  color: var(--text-light);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
`;
