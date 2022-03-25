import { motion } from 'framer-motion';
import { useState } from 'react';
import AddCategory from '../components/AddCategory';
import GifsContainer from '../components/GifsContainer';
import styles from './home.module.scss';

const variants = {
  initial: {
    opacity: 0,
    y: -500,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {},
};

function Home() {
  const [categories, setCategories] = useState([]);

  return (
    <div className={styles.main}>
      <motion.div className={styles.title} variants={variants} initial="initial" animate="animate">
        <h3> Gify </h3>
      </motion.div>
      <AddCategory setCategories={setCategories} />
      <div className={styles.container}>
        {categories.map((cat, idx) => (
          <GifsContainer key={cat.concat(idx)} category={cat} />
        ))}
      </div>
    </div>
  );
}
export default Home;
