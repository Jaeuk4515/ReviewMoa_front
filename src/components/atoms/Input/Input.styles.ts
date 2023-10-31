import styled from "styled-components";

const InputBox = styled.input<{color: string, width: string, height: string}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  
  &:focus {
    outline: none;
  }
`

export { InputBox }