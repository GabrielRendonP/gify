/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './gifItem.module.scss';

const variants = {
  initial: {
    scale: 0,
    x: -100,
  },
  animate: {
    scale: 1,
    x: 0,
  },
};
function GifItem({
  id, title, url, onSelected,
}) {
  return (
    <motion.div
      className={styles.main}
      variants={variants}
      onClick={() => onSelected(id, 'hidden')}
    >

      <img alt={title} src={url} />
      <h4>
        {' '}
        {title}
        {' '}
      </h4>
    </motion.div>
  );
}
GifItem.propTypes = {};
export default GifItem;
