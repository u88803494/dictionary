import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRawDefinitions } from './api';
import { IWordDetail } from './dictionary';

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const { data } = await getRawDefinitions(word);
  return data.heteronyms.map((wordDetail: IWordDetail) => {
    const definitionTypes = [...new Set(wordDetail.definitions.map((def) => def.type))];
    const typeDefinitions = definitionTypes.map((type) => [
      ...wordDetail.definitions.filter((def) => def.type === type),
    ]);
    const pinyin = wordDetail.pinyin.split(' ');

    return {
      pronunciations: wordDetail.bopomofo.split(' ').map((pronunciation, i) => ({
        pronunciation1: pronunciation,
        pronunciation2: pinyin[i],
        word: word[i],
      })),
      typeDefinitions,
    };
  });
});
