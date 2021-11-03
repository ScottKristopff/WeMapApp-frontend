import styled from 'styled-components/macro';
import { Mobile } from '../../reponsive';

export const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
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
  ${Mobile({
    width: '300px',
    height: '280px'
  })}
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(4, 96%, 64%);
  font-weight: 700;
  font-size: 30px;
  ${Mobile({
    fontSize: '18px'
  })}
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  ${Mobile({
    padding: '0'
  })}
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  margin: 15px 0;
  width: 80%;
  padding: 10px 0;
  padding-left: 10px;
  font-size: 16px;
  ${Mobile({
    padding: '0',
    paddingLeft: '10px'
  })}
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 18px 37%;
  background-color: hsl(232, 96%, 69%);
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  margin-top: 10px;
  ${Mobile({
    padding: '12px 33%'
  })}
`;

export const SuccessSpan = styled.span`
  color: hsl(120, 100%, 25%);
  margin: 25px;
  font-size: 12px;
  text-align: center;
  margin: 10px;
  font-size: 16px;
`;
export const WrongSpan = styled.span`
  color: hsl(0, 100%, 50%);
  font-size: 12px;
  text-align: center;
  margin: 10px;
  font-size: 16px;
`;

export const StyledSpan = styled.span``;

export const RegisterCancel = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
