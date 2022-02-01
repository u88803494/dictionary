import type { NextPage } from 'next';

import { decrement, increment } from 'features/counter/counter.slice';
import { useAppDispatch, useAppSelector } from 'features/hook';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      {count}
      <br />
      <button className="rounded border-black border-2" onClick={() => dispatch(increment())} type="submit">
        Increment +1
      </button>
      <br />
      <button className="rounded border-black border-2" onClick={() => dispatch(decrement())} type="submit">
        Decrement -1
      </button>
    </div>
  );
};

export default Home;
