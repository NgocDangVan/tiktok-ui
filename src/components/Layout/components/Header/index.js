import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
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
    const currentUser = true;

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

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return <header className={styles.wrapper}>
                <div className={styles.inner}>
                    <div>
                        <img src={images.logo.default} alt='Tiktok'></img>
                    </div>
                    <HeadlessTippy 
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
                    </HeadlessTippy>

                    <div className={styles.actions}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0,200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={styles.actionBtn}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                            <>
                                <Button text>
                                    Upload
                                </Button>
                                <Button primary >
                                    Login
                                </Button>
                            </> 
                        )}
                        <Menu
                            items = {currentUser ? userMenu : MENU_ITEMS}    
                            onchange = {handleMenuChange}
                        >
                            {currentUser ? (
                                <img className={styles.userAvartar} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1d896b842df46e1f6fd266babebb4d9b.jpeg?lk3s=a5d48078&nonce=54416&refresh_token=2b5e1609e8fb2d968c2b84e8f3baa796&x-expires=1726902000&x-signature=lpWV24zigjwWH6jBBy%2FIwBQK4FE%3D&shp=a5d48078&shcp=b59d6b55' alt='Nguyễn Văn A'></img>
                            ) : (
                                <Button className={styles.moreButton}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </Button>
                            )}
                            
                        </Menu>
                        </div>
                    
                </div>
            </header>;
}

export default Header;