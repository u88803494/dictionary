import { getRawDefinitions } from './dictionary.api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const res = await getRawDefinitions(word);
  return res.data;
});
