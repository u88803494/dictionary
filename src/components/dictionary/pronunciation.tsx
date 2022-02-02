import React from 'react';

import { IPronunciation } from 'redux/dictionary';

const Pronunciation = ({ pronunciation1 = '', pronunciation2 = '', word = '' }: IPronunciation): JSX.Element => {
  return <div>{pronunciation1 + pronunciation2 + word}</div>;
};

export default Pronunciation;
