import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 300px;
  height: 280px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: slateblue;
  font-weight: 700;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  margin: 15px 0;
  width: 80%;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 32%;
  background-color: slateblue;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

export const SuccessSpan = styled.span`
  color: green;
  margin: 25px;
  font-size: 12px;
  text-align: center;
`;
export const WrongSpan = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
`;

export const StyledSpan = styled.span``;

export const RegisterCancel = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
