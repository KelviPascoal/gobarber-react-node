import styled, { css } from "styled-components";
import {Tooltip} from '../Tooltip'


interface ContainerProps{
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 6px;
  background-color: #232129;
  width: 100%;
  padding: 13px;

  border: solid 2px #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 5px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
  `}

  svg {
    margin-right: 8px;
  }
  input {
    font-size: 16px;
    background: transparent;
    color: #f4ede8;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }

`;
