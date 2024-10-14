import styled, { css } from "styled-components";
import {IButtonStyled} from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #565656;
  border-radius: 22px;
  border: none;

  position: relative;

  color: #FFFFFF;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  
  font-size: 16px;
  text-transform:  uppercase;
  font-weight: bold;
  letter-spacing: 1px;

  
  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #E4105D;

    &::after {
      content: "";
      position: absolute;

      border: 1px solid #E4105D;
      border-radius: 22px;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      
      }

    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 30px #E4105D;
    }

    `}
`
