import { useAppSelector } from 'redux/hook';

import Pronunciation from './ip';

const Dictionary = (): JSX.Element => {
  const heteronyms = useAppSelector((state) => state.dictionary.heteronyms);

  return (
    <div>
      {heteronyms.map(({ key, pronunciations }) => {
        return (
          <div key={key}>
            {pronunciations &&
              pronunciations.map(({ key, pronunciation1, pronunciation2, word }) => (
                <Pronunciation key={key} {...{ pronunciation1, pronunciation2, word }} />
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Dictionary;
