export const clearPronunciation = (pronunciation: string): string => {
  const clearedList: Array<string> = ['（讀音）', '（語音）', '（又音）'];
  return clearedList.reduce((prev, current) => prev.split(current).join(''), pronunciation);
};

export const parsePolyphonicTag = (definition: string): string => {
  const replaces = {
    '<1>': '（一）',
    '<2>': '（二）',
    '<3>': '（三）',
  };
  return Object.entries(replaces).reduce(
    (prev, [origin, replacement]) => prev.replace(origin, replacement),
    definition
  );
};

export const findIncorrectDefinition = (definition: string): boolean => {
  const findNbsp = !!definition.match(/[&nbsp]/) as boolean;
  if (findNbsp) return findNbsp;

  const findReferences = definition.match(/(見|<|>|條|（|）)/g) as RegExpMatchArray | null;
  if (findReferences) return findReferences.length === 6;
  return false;
};

export const getWordFromUrl = (hashRouter: string) => decodeURIComponent(hashRouter.replace(/(\/|#)/g, ''));
