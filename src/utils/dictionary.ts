export const clearPronunciation = (pronunciation: string): string => {
  const clearedList: Array<string> = ['（讀音）', '（語音）'];
  return clearedList.reduce((prev, current) => prev.split(current).join(''), pronunciation);
};
