import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const ButtonContainer = styled.button`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { MainContainer, ButtonContainer, WelcomeText, InputContainer };
