import styled from "styled-components";

const ButtonContainer = styled.button`
  font-size: 1em;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 1em;
  background-color: #EA4C89;
  border-radius: 30px;
  cursor: pointer;
  height: 40px;
  width: 120px;

  Button:hover,
  Button:focus {
  background-color: #F082AC;
   }
`;

export default ButtonContainer;