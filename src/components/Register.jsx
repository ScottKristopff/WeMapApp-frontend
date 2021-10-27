import React, { useState, useRef } from 'react';
import {
  Wrapper,
  StyledLogo,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSpan,
  SuccessSpan,
  WrongSpan,
  RegisterCancel
} from './Styles/RegisterStyles';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const Register = ({ setShowRegister }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //Handler ~ (Functions)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value
    };

    try {
      await axios.post('/users/register', newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <Wrapper>
        <StyledLogo>
          <LocationOnIcon />
          <StyledSpan>HobbyPin</StyledSpan>
        </StyledLogo>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput autoFocus type="text" placeholder="username" ref={usernameRef} />
          <StyledInput autoFocus type="text" placeholder="email" ref={emailRef} />
          <StyledInput autoFocus type="password" placeholder="password" ref={passwordRef} />
          <StyledButton>Register</StyledButton>
          {success && <SuccessSpan>Successfull. You can login now!</SuccessSpan>}
          {error && <WrongSpan> Something went wrong!</WrongSpan>}
        </StyledForm>
        <RegisterCancel>
          <CancelIcon onClick={() => setShowRegister(false)} />
        </RegisterCancel>
      </Wrapper>
    </div>
  );
};

export default Register;
