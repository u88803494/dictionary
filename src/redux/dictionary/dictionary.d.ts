interface IDefinition {
  def: string;
  example?: string;
  quote?: string | Array<string>;
  synonyms?: string;
  type?: string;
}

export interface IHeteronyms {
  heteronyms: [];
}

export interface IWordDetail {
  bopomofo: string;
  bopomofo2: string;
  definitions: Array<IDefinition>;
  pinyin: string;
}
