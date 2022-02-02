import { useAppSelector } from 'redux/hook';

const Dictionary = () => {
  const heteronyms = useAppSelector((state) => state.dictionary.heteronyms);

  return <>{JSON.stringify(heteronyms)}</>;
};

export default Dictionary;
