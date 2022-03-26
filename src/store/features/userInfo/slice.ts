import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { RootState } from 'store';
import { Url, Image } from 'types/Resource';

interface InitialState {
  resources: (Url | Image)[];
  currentView: Url | Image | null;
}

const initialState: InitialState = {
  resources: [
    {
      type: 'Url',
      id: uuid(),
      url: 'https://medium.com/@tapajyoti-bose/beautify-your-github-profile-like-a-pro-2f7922895953',
      name: 'https://medium.com/@tapajyoti-bose/beautify-your-github-profile-like-a-pro-2f7922895953',
      createdAt: +new Date(),
    },
    {
      type: 'Url',
      id: uuid(),
      url: 'https://brunch.co.kr/@carynful/19',
      name: 'https://brunch.co.kr/@carynful/19',
      createdAt: +new Date(),
    },
    {
      type: 'Url',
      id: uuid(),
      url: 'https://typed.blog/how-to-write-a-better-research-paper-faster/',
      name: 'https://typed.blog/how-to-write-a-better-research-paper-faster/',
      createdAt: +new Date(),
    },
    {
      type: 'Url',
      id: uuid(),
      url: 'https://www.youtube.com/embed/0OSUw7hJfVs',
      name: 'https://www.youtube.com/embed/0OSUw7hJfVs',
      createdAt: +new Date(),
    },
  ],

  currentView: null,
};

const slice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addResources(state, action: PayloadAction<(Url | Image)[]>) {
      state.resources.push(...action.payload);
    },

    changeResource(state, action: PayloadAction<{ id: string; newData: Url | Image }>) {
      state.resources = state.resources.map((resource) => {
        return resource.id === action.payload.id ? action.payload.newData : resource;
      });
    },

    removeResource(state, action: PayloadAction<string>) {
      state.resources = state.resources.filter(({ id }) => id !== action.payload);
    },

    changeCurrentView(state, action: PayloadAction<string | null>) {
      state.currentView = state.resources.find(({ id }) => id === action.payload) ?? null;
    },
  },
});

export const selectResources = createSelector(
  (state: RootState) => state.userInfoReducer.resources,

  (resources) => [...resources].sort((one, other) => other.createdAt - one.createdAt)
);

export const selectCurrentView = createSelector(
  (state: RootState) => state.userInfoReducer.currentView,

  (currentView) => currentView
);

export const { addResources, changeResource, removeResource, changeCurrentView } = slice.actions;
export default slice.reducer;
