import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    
    const renderItems = () => {
        return items.map((item,index) => (
            <MenuItem key={index} data={item}></MenuItem>
        ));
    } 
    
    return ( 
        <Tippy 
            interactive
            delay={ [0,800] }
            placement="bottom-end"
            render={attrs => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
            )}
        >
            <div>
                {children}
            </div>
            
        </Tippy>
     );
}

export default Menu;