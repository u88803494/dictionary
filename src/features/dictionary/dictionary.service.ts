import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRawDefinitions } from './dictionary.api';

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const res = await getRawDefinitions(word);
  return res.data;
});
