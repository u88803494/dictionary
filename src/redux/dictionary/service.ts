import { createAsyncThunk } from '@reduxjs/toolkit';

import type { IWordDetail } from 'types/dictionary';
import { clearPronunciation, findIncorrectDefinition, parsePolyphonicTag } from 'utils/dictionary';
import { getRawDefinitions } from './api';

export const getDefinitions = createAsyncThunk('dictionary/getDefinitions', async (word: string) => {
  const { data } = await getRawDefinitions(word);
  return data.heteronyms.map(({ bopomofo, bopomofo2, definitions, pinyin }: IWordDetail) => {
    const definitionWordClasses = [...new Set(definitions.map((def) => def.type))];
    const splitPinyin = pinyin.split(' ');
    const filteredDefinitions = definitions
      .filter((definition) => !findIncorrectDefinition(definition.def))
      .map(({ def, ...definitionData }) => ({ ...definitionData, def: parsePolyphonicTag(def) }));
    const filteredBopomofo = bopomofo.split(' （又音）')[0];

    return {
      key: bopomofo + bopomofo2 + pinyin,
      pronunciations: filteredBopomofo.split(' ').map((pronunciation, i) => ({
        key: pronunciation + splitPinyin[i] + word[i],
        pronunciation1: clearPronunciation(pronunciation),
        pronunciation2: clearPronunciation(splitPinyin[i]),
        word: word[i],
      })),
      wordClassesDefinitions: definitionWordClasses.map((wordClass) => ({
        wordClass,
        definitions: filteredDefinitions.filter(({ type }) => type === wordClass),
      })),
    };
  });
});
