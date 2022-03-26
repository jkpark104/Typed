import styled from '@emotion/styled';

import BaseResourceList from 'components/ResourceList/ResourceList';
import BaseViewer from 'components/Viewer/Viewer';

const Main = styled.div`
  display: flex;
  width: 1200px;
  height: 800px;
  margin: 20px auto;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
`;

const ResourceList = styled(BaseResourceList)`
  width: 280px;
`;

const Viewer = styled(BaseViewer)`
  flex: 1;
`;

export default {
  Main,
  ResourceList,
  Viewer,
};
