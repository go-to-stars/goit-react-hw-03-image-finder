import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  min-width: 180px;
  max-width: 300px;

  font-family: inherit;
  font-size: 18px;
  line-height: calc(24 / 18);
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  color: #fff;
  background-color: #3f51b5;  
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    color: #303f9f;
    background-color: #fff;
    border: 2px solid #303f9f;    
  }
`;
