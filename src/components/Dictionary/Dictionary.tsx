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
          <div className="mt-2" key={key}>
            <div className="flex flex-wrap">
              {pronunciations &&
                pronunciations.map(({ key, pronunciation1, pronunciation2, word }) => (
                  <Pronunciation key={key} {...{ pronunciation1, pronunciation2, word }} />
                ))}
            </div>
            <ul className="flex tracking-[0.5rem] text-slate-300">
              <li className="mr-2 rounded-t-lg border-b border-slate-600 bg-slate-700 py-3 px-4 text-lg font-medium">
                釋義
              </li>
            </ul>
            <div className="rounded-b-xl rounded-tr-xl bg-slate-700 px-4 pt-2 pb-8">
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
