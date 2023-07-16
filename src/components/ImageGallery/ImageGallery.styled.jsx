import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  list-style: none;

  @media (max-width: 1023.98px) {
    max-width: calc(100vw - 32px);
    grid-gap: 12px;
  }

  @media (max-width: 767.98px) {
    max-width: calc(100vw - 24px);
    grid-gap: 8px;
  }
`;
