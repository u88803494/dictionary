interface IDefinition {
  def?: string;
  example?: string;
  link?: Array<string>;
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
  definitions: Array<IDefinition>;
  wordClass: string;
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
