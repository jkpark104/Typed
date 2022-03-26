import styled from '@emotion/styled';

interface DropzoneStates {
  isFocused?: boolean;
  isDragAccept?: boolean;
  isDragReject?: boolean;
}

const getColor = (props: DropzoneStates) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const Container = styled.div`
  padding: 10px;
`;

const Dropzone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props: DropzoneStates) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const Description = styled.p`
  white-space: pre-line;
  text-align: center;
`;

export default {
  Container,
  Dropzone,
  Description,
};
