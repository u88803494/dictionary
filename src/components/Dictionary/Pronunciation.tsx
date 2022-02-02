import React from 'react';

import { IPronunciation } from 'redux/dictionary';

const Pronunciation = (props: IPronunciation): JSX.Element => {
  const { pronunciation1, pronunciation2, word } = props;
  const pronunciations = [pronunciation1, pronunciation2];
  return (
    <div className="flex text-slate-200">
      <div className="mr-3 flex h-20 w-20 items-center justify-center bg-slate-200 text-7xl text-slate-800">{word}</div>
      <div className="flex flex-col justify-center text-xl">
        {pronunciations.map((pronunciation: string) => (
          <div key={pronunciation} className="flex justify-center">
            {pronunciation}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pronunciation;
