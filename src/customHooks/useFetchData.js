/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';

const useFetchData = () => {
  const [state, setState] = useState([]);
  const fetch = async (search) => {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'Ti3mPr61mUfkDxtfYYzudk3Aufrsu3qv',
        q: search,
        limit: 10,
      },
    });
    console.log(res);
    setState(res.data.data);
    return res;
  };

  return [fetch, state];
};

export default useFetchData;
