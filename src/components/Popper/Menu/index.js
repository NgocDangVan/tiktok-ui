import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onchange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item,index) => {
            const isParent = !!item.children;
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev,item.children]);
                }
                else {
                    onchange(item);
                }
            }}></MenuItem>
        });
    } 
    
    return ( 
        <Tippy 
            interactive
            delay={ [0,700] }
            offset={[12,8]}
            hideOnClick = {hideOnClick}
            placement="bottom-end"
            render={attrs => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && <Header title={'Language'} onBack={() => {
                                setHistory(prev => prev.slice(0,prev.length - 1));
                            }}></Header>}
                            <div className={cx('menu-body')}>
                                {renderItems()}
                            </div>
                        </PopperWrapper>
                    </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0,1))}
            
        >
            <div>
                {children}
            </div>
            
        </Tippy>
     );
}

export default Menu;