import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return <header className={styles.wrapper}>
                <div className={styles.inner}>
                    <div>
                        <img src={images.logo.default} alt='Tiktok'></img>
                    </div>
                    <div className={styles.search}>
                        <input placeholder='Search accounts and videos' spellCheck={false}></input>
                        <button className={styles.clear}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={styles.loading}></FontAwesomeIcon>
                        <button className={styles.searchButton}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={styles.actions}></div>
                </div>
            </header>;
}

export default Header;