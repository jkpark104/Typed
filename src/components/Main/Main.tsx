import React from 'react';

import Styled from './Main.styled';

import A11yHidden from 'components/A11yHidden/A11yHidden';

function Main() {
  return (
    <Styled.Main>
      <A11yHidden as="h1">Typed Assignment</A11yHidden>
      <Styled.ResourceList />
      <Styled.Viewer />
    </Styled.Main>
  );
}

export default Main;
