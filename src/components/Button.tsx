import React, { ReactElement } from "react"
import styled from "styled-components"

import { ReactComponent as Svg } from '../assets/shuffle.svg'

const ButtonStyled = styled.button`
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

:hover,
:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}
:hover {
  transform: translateY(-1px);
}
:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
b{
  color: black;
  font-size: 1.3em;
}
`

interface IButton {
  children: React.ReactNode
  /* Função de callback ao clickar no botão */
  onClick(): void,
}

const Button = (props: IButton): ReactElement => {
  return(
    <>
      <ButtonStyled onClick={props.onClick}>
        <Svg style={{width: "50px", marginRight: "25px"}}/>
        <b>{props.children}</b>
      </ButtonStyled>
    </>
  )
}

export { Button }
export default Button
