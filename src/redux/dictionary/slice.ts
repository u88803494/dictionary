import { createSlice } from '@reduxjs/toolkit';

import { IHeteronyms } from './dictionary';
import { getDefinitions } from './service';

const initialState: IHeteronyms = {
  heteronyms: [],
};

const dictionary = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDefinitions.fulfilled, (state, action) => {
      state.heteronyms = action.payload;
    });
  },
});

export const actions = dictionary;

export const { reducer } = dictionary;
