import { createSlice } from '@reduxjs/toolkit';

import { IDictionary } from './dictionary.interface';
import { getDefinitions } from './dictionary.service';

const initialState: IDictionary = {
  definitions: [],
};

const dictionary = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDefinitions.fulfilled, (state, action) => {
      state.definitions = action.payload;
    });
  },
});

export const actions = dictionary;

export const { reducer } = dictionary;
