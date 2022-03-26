import React from 'react';
import { useDropzone, FileError } from 'react-dropzone';
import { File } from 'types/Resource';

import Styled from './Dropzone.styled';
import { DropzoneProps } from './Dropzone.types';

function Dropzone({ onDrop, maxFiles }: DropzoneProps) {
  const dropZone = useDropzone({
    onDrop,
    maxFiles,
    accept: 'image/jpeg,image/jpg,image/png',
  });

  const { isDragActive, isFocused, isDragAccept, isDragReject } = dropZone;

  return (
    <Styled.Container>
      <Styled.Dropzone {...dropZone.getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...dropZone.getInputProps()} />
        <Styled.Description>
          {isDragActive
            ? '파일을 여기에 끌어다 놓으세요'
            : '파일을 여기에 끌어다 놓거나\n 클릭해 파일을 선택하세요'}
        </Styled.Description>
      </Styled.Dropzone>
    </Styled.Container>
  );
}

export default Dropzone;
