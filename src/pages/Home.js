import { useState } from 'react';
import AddCategory from '../components/AddCategory';
import GifsContainer from '../components/GifsContainer';
import styles from './home.module.scss';

function Home() {
  const [categories, setCategories] = useState([]);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h3> Gify </h3>
      </div>
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
