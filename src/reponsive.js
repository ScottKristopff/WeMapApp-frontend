import { css } from 'styled-components';

export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 550px) {
      ${props}
    }
  `;
};

export const Tablet = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};

export const Laptop = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};

export const Desktop = (props) => {
  return css`
    @media only screen and (max-width: 1500px) {
      ${props}
    }
  `;
};
