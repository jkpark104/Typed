import React from 'react';

import Styled from './A11yHidden.styled';

function A11yHidden({ as, children }: { as: React.ElementType; children: React.ReactNode }) {
  return <Styled.A11yHidden as={as}>{children}</Styled.A11yHidden>;
}

export default A11yHidden;
