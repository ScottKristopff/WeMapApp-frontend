import styled from 'styled-components/macro';

export const StyledCard = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledLabel = styled.label`
  width: max-content;
  color: tomato;
  font-size: 13px;
  border-bottom: 0.5px solid tomato;
  margin: 3px 0;
`;

export const StyledDesc = styled.p`
  font-size: 14px;
`;

export const StyledStar = styled.div`
  color: gold;
`;

export const StyledUsername = styled.span`
  font-size: 14px;
`;

export const StyledDate = styled.span`
  font-size: 10px;
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
  border-bottom: 1px solid gray;
  margin: 5px 0;
  width: 90%;
`;

export const StyledTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid gray;
  width: 90%;
  height: 50px;
  padding: 5px;
`;

export const StyledInputPlaceHolder = styled.div`
  input::placeholder {
    font-size: 12px;
    color: rgb(199, 198, 198);
  }
  textarea::placeholder {
    font-size: 12px;
    color: rgb(172, 169, 169);
  }
`;

export const StyledSubmitButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: tomato;
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
  color: white;
  background-color: slateblue;
  cursor: pointer;
  margin-right: 10px;
`;

export const LoginButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: teal;
  cursor: pointer;
  margin: 0 15px;
`;

export const LogoutButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: tomato;
  position: absolute;
  /*   top: 0px;
  right: 0px; */
  cursor: pointer;
  margin: 10px 15px;
`;
