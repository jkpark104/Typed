import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { useInput } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store';
import { selectResources, addResources } from 'store/features/userInfo/slice';

import { Url, Image, File } from 'types/Resource';
import { changeYoutubeUrl, delay, getRandomMillisecond, getRandomValidation } from 'utils';

import Styled from './ResourceList.styled';

import Resource from 'components/Resource/Resource';
import Dropzone from 'components/Dropzone/Dropzone';
import Toast from 'components/Toast/Toast';
import A11yHidden from 'components/A11yHidden/A11yHidden';

function ResourceList({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const resourceList = useAppSelector(selectResources);

  const {
    value,
    setValue,
    isEditing: isUrlAdditionalMode,
    setIsEditing: setIsUrlAdditionalMode,
    inputRef,
  } = useInput('https://');

  const [isImageAdditionalMode, setIsImageAdditionalMode] = useState(false);

  const handleUrlInputClick = () => {
    setIsUrlAdditionalMode((prevState) => {
      if (!prevState) {
        setIsImageAdditionalMode(false);
        setValue('https://');
      }

      return !prevState;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const $target = e.target as HTMLInputElement;

    const newUrl: Url = {
      type: 'Url',
      id: uuid(),
      url: changeYoutubeUrl($target.value),
      name: changeYoutubeUrl($target.value),
      createdAt: +new Date(),
    };

    dispatch(addResources([newUrl]));

    setIsUrlAdditionalMode(false);
    setValue('https://');
  };

  const handleImageInputClick = () => {
    setIsImageAdditionalMode((prevState) => {
      if (!prevState) {
        setIsUrlAdditionalMode(false);
      }

      return !prevState;
    });
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      let newImages: Image[] = [];

      for (const file of acceptedFiles) {
        await delay(getRandomMillisecond());

        const isValid = getRandomValidation();

        newImages = isValid
          ? [
              ...newImages,
              {
                type: 'Image',
                id: uuid(),
                src: URL.createObjectURL(file),
                alt: file.name,
                createdAt: +new Date(),
              },
            ]
          : newImages;

        isValid
          ? toast.success(`${file.name} 불러오기 성공`, {
              position: 'top-right',
            })
          : toast.error(`${file.name} 불러오기 실패`, {
              position: 'top-right',
            });
      }

      dispatch(addResources(newImages));
      setIsImageAdditionalMode(false);
    },
    [dispatch]
  );

  return (
    <Styled.Container>
      <A11yHidden as="h2">Resource List</A11yHidden>
      <Styled.ButtonWrapper>
        <Styled.Button type="button" onClick={handleUrlInputClick}>
          URL 추가
        </Styled.Button>
        <Styled.Button type="button" onClick={handleImageInputClick}>
          이미지 추가
        </Styled.Button>
      </Styled.ButtonWrapper>
      {(isUrlAdditionalMode || isImageAdditionalMode) && (
        <Styled.InputContainer>
          {isImageAdditionalMode && <Dropzone onDrop={onDrop} />}
          {isUrlAdditionalMode && (
            <Styled.Input
              ref={inputRef}
              value={value}
              onChange={handleInputChange}
              onKeyUp={handleEnterClick}
            />
          )}
        </Styled.InputContainer>
      )}
      <Styled.List className={className}>
        {resourceList.map((resource) => (
          <Resource key={resource.id} {...resource} />
        ))}
      </Styled.List>
      <Toast />
    </Styled.Container>
  );
}

export default ResourceList;
