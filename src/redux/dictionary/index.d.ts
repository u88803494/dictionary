interface IDefinition {
  def: string;
  example?: string;
  quote?: string | Array<string>;
  synonyms?: string;
  type?: string;
}

export interface IPronunciation {
  key: string;
  pronunciation1: string;
  pronunciation2: string;
  word: string;
}

interface IWordClassesDefinition {
  wordClass: string;
  definitions: Array<IDefinition>;
}

export interface IHeteronym {
  key: string;
  pronunciations: Array<IPronunciation>;
  wordClassesDefinitions: Array<IWordClassesDefinition>;
}

export interface IDictionary {
  heteronyms: Array<IHeteronym>;
}

export interface IWordDetail {
  bopomofo: string;
  bopomofo2: string;
  definitions: Array<IDefinition>;
  pinyin: string;
}
