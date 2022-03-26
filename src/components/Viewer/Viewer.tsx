import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectCurrentView, changeCurrentView } from 'store/features/userInfo/slice';
import { getNameOfImage } from 'utils';

import Styled from './Viewer.styled';

function Viewer({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const currentView = useAppSelector(selectCurrentView);

  const handleCloseButton = () => {
    dispatch(changeCurrentView(null));
  };

  return (
    <Styled.Viewer className={className} $inView={!!currentView}>
      {currentView && (
        <>
          <Styled.Container>
            <h2>
              {currentView.type === 'Url' ? currentView.name : getNameOfImage(currentView.alt)}
            </h2>
            <Styled.Button type="button" onClick={handleCloseButton} />
          </Styled.Container>
          <Styled.Content>
            {currentView.type === 'Image' ? (
              <Styled.Image src={currentView.src} alt={currentView.alt} />
            ) : (
              <Styled.Iframe title={currentView.url} src={currentView.url} />
            )}
          </Styled.Content>
        </>
      )}
    </Styled.Viewer>
  );
}

export default Viewer;
