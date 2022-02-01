import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../features/counter/counter.slice';
import { RootState } from '../features/store';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);

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
