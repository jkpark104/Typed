import React from 'react';
import { createPortal } from 'react-dom';

import Styled from './Toast.styled';

function Toast() {
  return createPortal(<Styled.Toast />, document.body);
}

export default Toast;
