import styled from '@emotion/styled';
import { TypedIconSvgs as IconImages } from 'typed-design-system';

const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 90px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #fff;
`;

const Input = styled.input`
  margin: 12px 12px 0;
  padding: 8px 6px 6px 8px;
  line-height: 16px;
  font-size: 14px;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 280px;
  padding: 5px;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin: 12px 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin: 0 12px 12px 0;
`;

const Button = styled.button<{ $type: 'edit' | 'trash' }>`
  width: 19px;
  height: 19px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${({ $type }) => IconImages[`${$type}_small`]});
  order: ${({ $type }) => $type === 'trash' && 1};
  background-position: center;
`;

export default {
  Container,
  Input,
  ImageContainer,
  Image,
  Title,
  ButtonWrapper,
  Button,
};
