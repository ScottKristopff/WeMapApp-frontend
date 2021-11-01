import styled from 'styled-components/macro';

export const StyledCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledLabel = styled.label`
  width: max-content;
  color: hsl(4, 96%, 64%);
  font-size: 1rem;
  border-bottom: 0.5px solid hsl(4, 96%, 64%);
  margin: 5px 3px;
`;

export const StyledTitle = styled.h4`
  margin: 0 3px;
  font-size: 1.125rem;
`;

export const StyledDesc = styled.p`
  font-size: 1.125rem;
  margin: 0 3px;
`;

export const StyledStar = styled.div`
  color: gold;
  margin: 0 3px;
`;

export const StyledUsername = styled.span`
  font-size: 1.125rem;
  margin: 0 3px;
`;

export const StyledDate = styled.span`
  font-size: 0.75rem;
  margin: 0 3px;
`;

//Font-size needs to be changed to rem
// Global styles needs to be implemented

export const StyledForm = styled.form`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid hsl(232, 0%, 69%);
  margin: 5px 0;
  width: 90%;
`;

export const StyledTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid hsl(232, 0%, 69%);
  width: 90%;
  height: 50px;
  padding: 5px;
`;

export const StyledInputPlaceHolder = styled.div`
  input::placeholder {
    font-size: 0.75rem;
    color: rgb(199, 198, 198);
  }
  textarea::placeholder {
    font-size: 0.75rem;
    color: rgb(172, 169, 169);
  }
`;

export const StyledSubmitButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(4, 96%, 64%);
  margin-top: 10px;
  cursor: pointer;
`;

export const StyledButton = styled.div`
  position: relative;
  /* top: 10px;
  right: 10px; */
  margin: 10px 0;
  width: 100vw;
`;

export const RegisterButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(232, 96%, 69%);
  cursor: pointer;
  margin-right: 10px;
`;

export const LoginButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(179, 96%, 29%);
  cursor: pointer;
  margin: 0 15px;
`;

export const LogoutButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(4, 96%, 64%);
  position: absolute;
  /*   top: 0px;
  right: 0px; */
  cursor: pointer;
  margin: 10px 15px;
`;
