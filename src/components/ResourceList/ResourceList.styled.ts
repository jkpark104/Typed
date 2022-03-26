import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  overflow-y: scroll;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  width: 280px;
  margin-left: 10px;
  margin-right: 10px;
  position: absolute;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  background: #f7f7f7;
  border: 2px solid #38a5e1;
  border-radius: 3px;
`;

const List = styled.ul`
  padding: 0 10px 10px;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
`;

const Button = styled.button`
  flex-grow: 1;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
`;

export default {
  Container,
  InputContainer,
  Input,
  List,
  ButtonWrapper,
  Button,
};
