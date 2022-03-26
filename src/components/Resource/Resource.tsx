import React, { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'store';
import { changeResource, removeResource, changeCurrentView } from 'store/features/userInfo/slice';
import { useInput } from 'hooks';
import { Url, Image, File } from 'types/Resource';
import { delay, getRandomMillisecond, getRandomValidation } from 'utils';

import Styled from './Resource.styled';
import { ResourceProps } from './Resource.types';

import Dropzone from 'components/Dropzone/Dropzone';
import A11yHidden from 'components/A11yHidden/A11yHidden';

function Resource(props: ResourceProps) {
  const dispatch = useAppDispatch();

  const { id, type } = props;

  const { fixedValue, setFixedValue, value, setValue, isEditing, setIsEditing, inputRef } =
    useInput(type === 'Url' ? props.url : props.src);

  const handleEditClick = () => {
    setIsEditing(!isEditing);

    if (isEditing && props.type === 'Url') {
      setFixedValue(value);
      const newData: Url = {
        ...props,
        name: value,
      };
      dispatch(changeResource({ id, newData }));
      dispatch(changeCurrentView(id));
    }
  };

  const handleTrashClick = () => {
    dispatch(removeResource(id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      await delay(getRandomMillisecond());
      const isValid = getRandomValidation();
      const [file] = acceptedFiles;
      const newData: Image = {
        ...(props as Image),
        src: URL.createObjectURL(file),
        alt: file.name,
      };
      if (isValid) {
        dispatch(changeResource({ id, newData }));
        dispatch(changeCurrentView(id));
      }
      isValid
        ? toast.success(`${file.name} 불러오기 성공`, {
            position: 'top-right',
          })
        : toast.error(`${file.name} 불러오기 실패`, {
            position: 'top-right',
          });
      setIsEditing(false);
    },
    [dispatch, id, props, setIsEditing]
  );

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget?.matches('.edit-button')) return;

    setIsEditing(!isEditing);

    if (isEditing && props.type === 'Url') {
      setFixedValue(value);
      const newData: Url = {
        ...props,
        name: value,
      };
      dispatch(changeResource({ id, newData }));
      dispatch(changeCurrentView(id));
    }
  };

  return (
    <li>
      <Styled.Container
        role="button"
        tabIndex={0}
        onClick={() => {
          dispatch(changeCurrentView(id));
        }}
      >
        {type === 'Url' &&
          (isEditing ? (
            <Styled.Input
              ref={inputRef}
              value={value}
              onChange={handleInputChange}
              onBlur={onBlur}
            />
          ) : (
            <Styled.Title>{fixedValue}</Styled.Title>
          ))}
        {type === 'Image' &&
          (isEditing ? (
            <Dropzone maxFiles={1} onDrop={onDrop} />
          ) : (
            <Styled.ImageContainer>
              <Styled.Image src={props.src} alt={props.alt} />
            </Styled.ImageContainer>
          ))}
        <Styled.ButtonWrapper>
          <Styled.Button type="button" $type="trash" onClick={handleTrashClick}>
            <A11yHidden as="span">trash button</A11yHidden>
          </Styled.Button>
          <Styled.Button
            className="edit-button"
            type="button"
            $type="edit"
            onClick={handleEditClick}
          >
            <A11yHidden as="span">edit button</A11yHidden>
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </li>
  );
}

export default Resource;
