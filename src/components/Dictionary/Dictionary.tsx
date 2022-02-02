import { IHeteronym, IWordClassesDefinition } from 'redux/dictionary';
import { useAppSelector } from 'redux/hook';
import Pronunciation from './Pronunciation';
import WordClass from './WordClass';

const Dictionary = (): JSX.Element => {
  const heteronyms = useAppSelector((state) => state.dictionary.heteronyms);

  return (
    <div className="space-y-12">
      {heteronyms.map(({ key, pronunciations, wordClassesDefinitions }: IHeteronym) => {
        return (
          <div className="space-y-6" key={key}>
            <div className="flex flex-wrap">
              {pronunciations &&
                pronunciations.map(({ key, pronunciation1, pronunciation2, word }) => (
                  <Pronunciation key={key} {...{ pronunciation1, pronunciation2, word }} />
                ))}
            </div>
            <div className="ml-4 w-full">
              {wordClassesDefinitions.map(({ definitions, wordClass }: IWordClassesDefinition) => (
                <WordClass key={wordClass} {...{ definitions, wordClass }} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dictionary;
