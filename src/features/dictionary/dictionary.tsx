import { useAppSelector } from 'features/hook';

const Dictionary = () => {
  const definitions = useAppSelector((state) => state.dictionary.heteronyms);

  return <>{JSON.stringify(definitions)}</>;
};

export default Dictionary;
