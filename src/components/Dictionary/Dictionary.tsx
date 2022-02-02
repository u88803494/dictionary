import { IHeteronyms } from 'redux/dictionary';
import { useAppSelector } from 'redux/hook';
import Pronunciation from './Pronunciation';

const Dictionary = (): JSX.Element => {
  const heteronyms = useAppSelector((state) => state.dictionary.heteronyms);

  return (
    <>
      {heteronyms.map(({ key, pronunciations }: IHeteronyms) => {
        return (
          <div className="space-y-6" key={key}>
            <div className="flex space-x-6">
              {pronunciations &&
                pronunciations.map(({ key, pronunciation1, pronunciation2, word }) => (
                  <Pronunciation key={key} {...{ pronunciation1, pronunciation2, word }} />
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dictionary;
