import { IDefinition, IWordClassesDefinition } from 'redux/dictionary';

const WordClass = ({ definitions, wordClass }: IWordClassesDefinition): JSX.Element => {
  return (
    <>
      <div>{wordClass}</div>
      {definitions.map(({ def, example, quote, synonyms }: IDefinition, index: number) => {
        return (
          <div key={def}>
            <div>{`${index + 1}. ${def}`}</div>
            <div className="pl-4">
              <div>{example}</div>
              <div>{quote}</div>
              <div>{synonyms}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WordClass;
