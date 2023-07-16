import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72px;
  padding: 12px 24px;
  padding-left: 16px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 1023.98px) {
    min-height: 68px;
    padding: 10px 20px;
    padding-left: 10px;
  }

  @media (max-width: 767.98px) {
    min-height: 64px;
    padding: 8px 16px;
    padding-left: 5px;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 1023.98px) {
    max-width: 450px;
  }

  @media (max-width: 767.98px) {
    max-width: 300px;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  line-height: 1;
  border: none;
  outline: none;
  padding-top: 0px;
  padding-left: 4px;
  padding-right: 4px;

  @media (max-width: 1023.98px) {
    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    font-size: 12px;
  }

  &::placeholder {
    font: inherit;
    font-size: 20px;
    line-height: 1;

    @media (max-width: 1023.98px) {
      font-size: 16px;
    }

    @media (max-width: 767.98px) {
      font-size: 12px;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  margin: 0;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1023.98px) {
    width: 42px;
    height: 42px;
  }

  @media (max-width: 767.98px) {
    width: 36px;
    height: 36px;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
