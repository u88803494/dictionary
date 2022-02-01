import { createSlice } from '@reduxjs/toolkit';

import { IDictionary } from './dictionary.interface';

const initialState: IDictionary = {
  definitions: [],
};

const dictionary = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
});

export const actions = dictionary;

export const { reducer } = dictionary;
