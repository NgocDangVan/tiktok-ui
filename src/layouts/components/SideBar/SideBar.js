import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from './Menu';
import {HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function SideBar() {
    return <aside className={cx('wrapper')}>
               <Menu>
                    <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon></HomeIcon>} activeIcon = {<HomeActiveIcon></HomeActiveIcon>}></MenuItem>
                    <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon></UserGroupIcon>} activeIcon = {<UserGroupActiveIcon></UserGroupActiveIcon>}></MenuItem>
                    <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon></LiveIcon>}  activeIcon = {<LiveActiveIcon></LiveActiveIcon>}></MenuItem>
               </Menu>
               <SuggestedAccounts label='Suggested accounts'></SuggestedAccounts>
               <SuggestedAccounts label='Following accounts'></SuggestedAccounts>
           </aside>;
}

export default SideBar;