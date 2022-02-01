import { useAppSelector } from 'features/hook';

const Dictionary = () => {
  const definitions = useAppSelector((state) => state.dictionary.definitions);

  return <>{JSON.stringify(definitions)}</>;
};

export default Dictionary;
