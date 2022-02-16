import React from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
} from "../styles/style";
function App() {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>LOG IN</ButtonContainer>
    </MainContainer>
  );
}

export default App;
