import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;

  @media (max-width: 1023.98px) {
    grid-gap: 12px;
    padding-bottom: 20px;
  }

  @media (max-width: 767.98px) {
    grid-gap: 8px;
    padding-bottom: 16px;
  }
`;

export const ErrorContainer = styled.div`
  padding-bottom: 24px;

  color: red;
  font-size: 18px;
  text-align: center;

  @media (max-width: 1023.98px) {
    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;
