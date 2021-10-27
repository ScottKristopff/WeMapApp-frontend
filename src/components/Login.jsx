import React, { useState, useRef } from 'react';
import {
  Wrapper,
  StyledLogo,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSpan,
  WrongSpan,
  RegisterCancel
} from './Styles/LoginStyles';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const Register = ({ setShowLogin, myStorage, setCurrentUser }) => {
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();

  //Handler ~ (Functions)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };

    try {
      const res = await axios.post('/users/login', user);
      myStorage.setItem('user', res.data.username);
      setCurrentUser(res.data.username);
      setShowLogin(false);
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
          <StyledInput autoFocus type="password" placeholder="password" ref={passwordRef} />
          <StyledButton>Login</StyledButton>

          {error && <WrongSpan> Something went wrong!</WrongSpan>}
        </StyledForm>
        <RegisterCancel>
          <CancelIcon onClick={() => setShowLogin(false)} />
        </RegisterCancel>
      </Wrapper>
    </div>
  );
};

export default Register;
