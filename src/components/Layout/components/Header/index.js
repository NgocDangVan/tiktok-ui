import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcut',
    }
];

function Header() {
    const [searchResult,setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);         
        },0);
    },[]);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language' : 
                // Handle change language
                break;
            default: 
                break;
        }
    };

    return <header className={styles.wrapper}>
                <div className={styles.inner}>
                    <div>
                        <img src={images.logo.default} alt='Tiktok'></img>
                    </div>
                    <Tippy 
                            interactive
                            visible = {searchResult.length > 0}
                            render={attrs => (
                                    <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <h4 className={styles.searchTitle}>
                                                Account
                                            </h4>
                                            <AccountItem></AccountItem>
                                            <AccountItem></AccountItem>
                                            <AccountItem></AccountItem>
                                            <AccountItem></AccountItem>

                                        </PopperWrapper>
                                    </div>
                            )}
                        >
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
                    </Tippy>
                    <div className={styles.actions}>
                        <Button text>
                            Upload
                        </Button>
                        <Button primary >
                            Login
                        </Button>

                        <Menu
                            items = {MENU_ITEMS}    
                            onchange = {handleMenuChange}
                        >
                            <Button className={styles.moreButton}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </Button>
                        </Menu>
                        
                    </div>
                </div>
            </header>;
}

export default Header;