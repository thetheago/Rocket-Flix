import React, { ReactNode } from 'react'
import styled from 'styled-components';

const DivErrorSyled = styled.div`
width: 40vw;
height: 307px;
display: flex;
align-items: center;
`

const ErrorFieldStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`


interface IErrorField {
  children: ReactNode,
}

const ErrorField = (props: IErrorField) => {
  return (
    <>
      <DivErrorSyled>
        <ErrorFieldStyled>
          {props.children}
        </ErrorFieldStyled>
      </DivErrorSyled>
    </>
  )
}

export { ErrorField }
export default ErrorField
