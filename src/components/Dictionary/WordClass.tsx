import { IDefinition, IWordClassesDefinition } from 'redux/dictionary';

const WordClass = ({ definitions, wordClass }: IWordClassesDefinition): JSX.Element => (
  <div className="mb-8">
    {wordClass && (
      <div className="border-b  border-slate-500 text-2xl">
        <div className="flex w-8 justify-center bg-slate-300 text-slate-700">{wordClass}</div>
      </div>
    )}
    {definitions.map(
      ({ def, example, quote, synonyms }: IDefinition, index: number): JSX.Element => (
        <div className="my-3" key={def}>
          <div className="text-lg font-medium">{`${index + 1}. ${def}`}</div>
          <div className="pl-4 font-serif">
            <div>{example}</div>
            <div>{quote}</div>
            <div>{synonyms}</div>
          </div>
        </div>
      )
    )}
  </div>
);

export default WordClass;
