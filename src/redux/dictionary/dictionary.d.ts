interface IDefinition {
  def: string;
  example?: string;
  quote?: string | Array<string>;
  synonyms?: string;
  type?: string;
}

interface IPronunciation {
  key?: string;
  pronunciation1?: string;
  pronunciation2?: string;
  word?: string;
}

interface IHeteronyms {
  key: string;
  pronunciations: Array<IPronunciation>;
  typeDefinitions: Array<IDefinition>;
}

export interface IDictionary {
  heteronyms: Array<IHeteronyms>;
}

export interface IWordDetail {
  bopomofo: string;
  bopomofo2: string;
  definitions: Array<IDefinition>;
  pinyin: string;
}
