import styled from '@emotion/styled';

export const RegInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  height: 10px;
  background: #2f303a;
  margin: 0;
  padding: 15px 16px;
  width: 450px;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);
  outline: none;
  transition-property: border;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
`;

export const RegForm = styled.form`
  display: block;
  text-align: center;
  align-items: center;
  margin-top: 50px;
`;

export const RegField = styled.label`
  display: block;
  margin-bottom: 15px;
  margin-left: 15px;
  color: white;
`;

export const RegBtn = styled.button`
  width: 115px;
  height: 40px;
  border: none;
  background-color: #a66dd4;
  font-size: 18px;
  margin-top: 20px;
  &:hover {
    background-color: #b621fe;
  }
`;
