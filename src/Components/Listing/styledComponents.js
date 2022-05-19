import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  padding: 0 10px;

  & > .listing {
    display: flex;
    margin-left: -30px;
    width: auto;

    & > .listing-column {
      padding-left: 30px;
      background-clip: padding-box;
      display: flex;
      flex-flow: column nowrap;
      gap: 10px;
    }
  }
`;
