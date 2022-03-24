import AddCategory from '../components/AddCategory';
import styles from './home.module.scss';

function Home() {
  const categories = ['cat1', 'cat2', 'cat3'];

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h3> Gify </h3>
      </div>
      <AddCategory />
      <div>
        {categories.map((cat) => (
          <div key={cat}>
            {' '}
            {cat}
            {' '}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
