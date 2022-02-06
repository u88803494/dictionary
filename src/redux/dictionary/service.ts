import { createAsyncThunk } from '@reduxjs/toolkit';

import type { IWordDetail } from 'types/dictionary';
import { getRawDefinitions } from './api';

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const { data } = await getRawDefinitions(word);
  return data.heteronyms.map(({ bopomofo, bopomofo2, definitions, pinyin }: IWordDetail) => {
    const definitionWordClasses = [...new Set(definitions.map((def) => def.type))];
    const splitPinyin = pinyin.split(' ');

    return {
      key: bopomofo + bopomofo2 + pinyin,
      pronunciations: bopomofo.split(' ').map((pronunciation, i) => ({
        key: pronunciation + splitPinyin[i] + word[i],
        pronunciation1: pronunciation.replace('（語音）', ''),
        pronunciation2: splitPinyin[i].replace('（語音）', ''),
        word: word[i],
      })),
      wordClassesDefinitions: definitionWordClasses.map((wordClass) => ({
        wordClass,
        definitions: definitions.filter(({ type }) => type === wordClass),
      })),
    };
  });
});
