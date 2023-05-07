import styles from './header.module.css';
import { Search } from '../../components/Search'
import Logo from '../Logo';


export const Header = () => {

  return (
    <header>
      <div className={styles.logo}>DogFood</div>
      <Search/>
      <Logo/>
      

      <nav>
        <button>Корзина</button>
        <button>Избранное</button>
        <button>Личный кабинет</button>

      </nav>
    </header>
  );
};