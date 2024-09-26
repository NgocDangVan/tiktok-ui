import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

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
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
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
    
    const currentUser = true;

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
                        <Link to={config.routes.home} className={styles.logoLink}>
                            <img src={images.logo.default} alt='Tiktok'></img>
                        </Link>
                    </div>
                    
                    {/* Search */}
                    <Search></Search>

                    <div className={styles.actions}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0,200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={styles.actionBtn}>
                                    <UploadIcon></UploadIcon>
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
                                // Vào trang placeholder.imageonline để tạo ảnh, tiny png để giảm dung lượng ảnh
                                <Image 
                                    className={styles.userAvartar} 
                                    src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1d896b842df46e1f6fd266babebb4d9b.jpeg?lk3s=a5d48078&nonce=54416&refresh_token=2b5e1609e8fb2d968c2b84e8f3baa796&x-expires=1726902000&x-signature=lpWV24zigjwWH6jBBy%2FIwBQK4FE%3D&shp=a5d48078&shcp=b59d6b55' 
                                    alt='Nguyễn Văn A'
                                    //fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                ></Image>
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