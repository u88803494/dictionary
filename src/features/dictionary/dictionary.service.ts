import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRawDefinitions } from './dictionary.api';

interface IWordDetail {
  bopomofo: string;
  bopomofo2: string;
  definitions: Array<string | Array<string>>;
  pinyin: string;
}

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const { data } = await getRawDefinitions(word);
  return data.heteronyms.map((wordDetail: IWordDetail) => {
    const definitionTypes = [...new Set(wordDetail.definitions.map((def: any) => def.type))];
    const typeDefinitions = definitionTypes.map((type) => [
      ...wordDetail.definitions.filter((def: any) => def.type === type),
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
