import styled from "styled-components";
import { commonButtonStyles, commonInputStyles } from "../../commonStyles";

export const Container = styled.main`
  padding: 30px;
`;

export const Title = styled.h2`
  color: var(--text-light);
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

export const FormControl = styled.label`
  display: flex;
  flex-flow: column;
  gap: 5px;
  cursor: pointer;
`;

export const ControlTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-light);
`;

export const Input = styled.input`
  ${commonInputStyles}
`;

export const Textarea = styled.textarea`
  ${commonInputStyles}

  resize: none;
  height: 150px;
`;

export const Button = styled.button`
  ${commonButtonStyles}
  align-self: flex-start;
`;
