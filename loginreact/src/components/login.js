import React from "react";

import {
    Body,
    Container,
    Head,
    Form
   
}from "../components/styles/logincss"


const placeholder1="enter email address";

const placeholder2="enter password";

const Login = () => {
  return (
    <Body>
      <Container>
        <Head>LOGIN HERE</Head>

        <Form>
           <input type="email" placeholder={placeholder1} />
           <input type="password" placeholder={placeholder2} />
        </Form>
      </Container>
    </Body>
  );
};
export default Login;