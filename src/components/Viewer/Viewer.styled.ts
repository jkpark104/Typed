import styled from '@emotion/styled';
import { TypedIconSvgs as IconImages } from 'typed-design-system';

const Viewer = styled.div<{ $inView: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ $inView }) => ($inView ? '#fff' : '#e5e5e5')};
`;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  padding: 17px;
  display: flex;
  height: 46.4px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
`;

const Button = styled.button`
  width: 19px;
  height: 19px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${IconImages.close_small});
  background-position: center;
`;

const Content = styled.div`
  padding: 17px;
  height: 100%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default {
  Viewer,
  Container,
  Button,
  Content,
  Image,
  Iframe,
};
