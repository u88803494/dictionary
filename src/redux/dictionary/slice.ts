import { createSlice } from '@reduxjs/toolkit';

import { IDictionary } from '.';
import { getDefinitions } from './service';

const initialState: IDictionary = {
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
