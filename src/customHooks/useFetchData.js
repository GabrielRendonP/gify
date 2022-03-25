/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';

const useFetchData = () => {
  const [state, setState] = useState([]);
  const [ready, setReady] = useState(false);
  const fetch = async (search) => {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'Ti3mPr61mUfkDxtfYYzudk3Aufrsu3qv',
        q: search,
        limit: 10,
      },
    });
    if (res.status === 200) {
      setReady(true);
    } else {
      setReady(false);
    }
    setState(res.data.data);
    return res;
  };

  return [fetch, state, ready];
};

export default useFetchData;
