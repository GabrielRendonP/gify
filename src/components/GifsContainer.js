/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useFetchData from '../customHooks/useFetchData';
import GifItem from './GifItem';
import styles from './gifsContainer.module.scss';

function GifsContainer({ category }) {
  const [fetch, results] = useFetchData();

  useEffect(() => {
    fetch(category);
    return () => {
    };
  }, []);

  return (
    <div className={styles.main}>
      <h3 className={styles.title}>
        {category}
      </h3>
      <div className={styles.container}>
        {results.map((gif) => (
          <GifItem key={gif.id} url={gif.images.original.url} title={gif.title} />
        ))}
      </div>
    </div>
  );
}
GifsContainer.propTypes = {};
export default GifsContainer;
