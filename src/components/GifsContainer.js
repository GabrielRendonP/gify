/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useFetchData from '../customHooks/useFetchData';
import GifItem from './GifItem';
import styles from './gifsContainer.module.scss';

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

function GifsContainer({ category }) {
  const [fetch, results, ready] = useFetchData();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(category);
    return () => {
    };
  }, []);

  const handleOnclick = (selection, op) => {
    document.body.style.overflow = op;
    setSelected(selection);
  };

  const getSelected = () => results.find((gif) => gif.id === selected);

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={styles.main}
      >
        <h3 className={styles.title}>
          {category}
          {selected}
        </h3>

        {(ready && results.length > 0)
          ? (
            <motion.div
              className={styles.container}
              variants={container}
              initial="initial"
              animate="animate"
            >
              { results.map((gif) => (
                <GifItem
                  key={gif.id}
                  id={gif.id}
                  url={gif.images.original.url}
                  title={gif.title}
                  onSelected={handleOnclick}
                />
              ))}
            </motion.div>
          )
          : <p>LOADING</p>}

        <AnimatePresence>
          {selected && (
          <motion.div
            key="over"
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            onClick={() => { handleOnclick(null, 'auto'); }}
          />
          )}
          {selected && (
          <motion.div
            className={styles.avatar}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.5, rotateZ: [0, -20, 20, 0] }}
            exit={{ opacity: 0, scale: 0, rotateZ: [0, 360] }}
            key={selected}
          >
            <img src={getSelected().images.original.url} alt="something" />
          </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </AnimateSharedLayout>
  );
}
export default GifsContainer;
