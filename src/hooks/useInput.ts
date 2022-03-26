import { useEffect, useRef, useState } from 'react';

export const useInput = (initValue: string) => {
  const [fixedValue, setFixedValue] = useState('');
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFixedValue(initValue);
    setValue(initValue);
  }, [initValue]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return {
    fixedValue,
    setFixedValue,
    value,
    setValue,
    isEditing,
    setIsEditing,
    inputRef,
  };
};
