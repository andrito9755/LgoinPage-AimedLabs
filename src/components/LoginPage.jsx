import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Header = styled.h1`
  color: white;
  text-align: center;
  @media (max-width: 347px) {
    font-size: 25px; /* Change font size for screens smaller than 347px */
  }
`;

const Label = styled.h3`
  color: antiquewhite;
  text-align: left;
  margin: 0;
  padding: 0;
  @media (max-width: 347px) {
    font-size: 13px; /* Change font size for screens smaller than 347px */
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f2f2f2;

  &:focus {
    border: 2px solid #4CAF50;
    color:black;
    background-color: #fff;
  }
  @media (max-width: 347px) {
    font-size: 13px; /* Change font size for screens smaller than 347px */
    height:15px;
    padding:10px;
    margin:8px 0;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 347px) {
    font-size: 10px; /* Change font size for screens smaller than 347px */
  }
`;

const RememberMeLabel = styled.label`
  color: antiquewhite;
  display: flex;
  align-items: center;
  @media (max-width: 347px) {
    font-size: 10px; /* Change font size for screens smaller than 347px */
  }
`;

const ChangePasswordLink = styled.a`
  color: orange;
  text-decoration: none;

  &:hover {
    color: #45a049;
  }
`;

const LeftAlignedCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  
  
`;

const TermsLabel = styled(Label)`
  font-size: 14px; /* Adjust the font size here */
  @media (max-width: 347px) {
    font-size: 10px; /* Change font size for screens smaller than 347px */
  }
`;

const LoginButton = styled.button`
  background-color: #4CAF50;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s ease;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 347px) {
    font-size: 10px;
    padding:10px 15px;
    hegith:10px;
  }
`;

const RegisterLink = styled.p`
  color: #4CAF50;
  font-size: 16px;
  text-align: center;
  @media (max-width: 347px) {
    font-size: 13px; /* Change font size for screens smaller than 347px */
  }
`;

function LoginPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleLogin = () => {
    if (!termsAccepted) {
        alert('Please accept the Terms & Conditions to Log in.');

    } 
  };

  return (
    <FormContainer>
      <Header>Login</Header>
      <Label>Login ID</Label>
      <InputField type="text" placeholder="Enter Login ID" />
      <Label>Password</Label>
      <InputField type="password" placeholder="Enter Password" />
      <CheckboxContainer>
        <RememberMeLabel>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
          />
          Remember me
        </RememberMeLabel>
        <ChangePasswordLink href="#">Change Password</ChangePasswordLink>
      </CheckboxContainer>
      <LeftAlignedCheckboxContainer>
        <input
          type="checkbox"
          id="termsConditions"
          name="termsConditions"
          onChange={() => setTermsAccepted(!termsAccepted)}
        />
        <TermsLabel htmlFor="termsConditions" >Agree to Terms & Conditions</TermsLabel>
      </LeftAlignedCheckboxContainer>
      <LoginButton onClick={handleLogin}>Login</LoginButton>
      <RegisterLink>Don't have an account? <a href="#">Register here</a></RegisterLink>
    </FormContainer>
  );
}

export default LoginPage;
