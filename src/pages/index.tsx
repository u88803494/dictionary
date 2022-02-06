import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Dictionary from 'components/Dictionary';
import { getDefinitions } from 'redux/dictionary/service';
import { useAppDispatch } from 'redux/hook';
import { getWordFromUrl } from 'utils/dictionary';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const word: string = getWordFromUrl(router.asPath);

  useEffect(() => {
    if (!word) {
      dispatch(getDefinitions('新'));
      return;
    }
    dispatch(getDefinitions(word));
  }, [dispatch, word]);

  return <Dictionary />;
};

export default Home;
