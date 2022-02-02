import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRawDefinitions } from './api';
import { IWordDetail } from '.';

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const { data } = await getRawDefinitions(word);
  return data.heteronyms.map(({ bopomofo, bopomofo2, definitions, pinyin }: IWordDetail) => {
    const definitionTypes = [...new Set(definitions.map((def) => def.type))];
    const typeDefinitions = definitionTypes.map((type) => [...definitions.filter((def) => def.type === type)]);
    const splitPinyin = pinyin.split(' ');

    return {
      key: bopomofo + bopomofo2 + definitions + pinyin,
      pronunciations: bopomofo.split(' ').map((pronunciation, i) => ({
        key: pronunciation + splitPinyin[i] + word[i],
        pronunciation1: pronunciation,
        pronunciation2: splitPinyin[i],
        word: word[i],
      })),
      typeDefinitions,
    };
  });
});
