import { createSlice } from '@reduxjs/toolkit';

import { IHeteronyms } from './dictionary.d';
import { getDefinitions } from './dictionary.service';

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
