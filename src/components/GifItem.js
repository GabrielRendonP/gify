/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styles from './gifItem.module.scss';

function GifItem({ title, url }) {
  return (
    <div className={styles.main}>

      <img alt={title} src={url} />
      <h4>
        {' '}
        {title}
        {' '}
      </h4>
    </div>
  );
}
GifItem.propTypes = {};
export default GifItem;
