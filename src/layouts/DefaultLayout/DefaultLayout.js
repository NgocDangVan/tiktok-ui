import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from "../components/Header";
import styles from './DefaultLayout.module.scss'
import SideBar from "~/layouts/components/SideBar";

const cx = classNames.bind(styles);

function DefaultLayout( {children} ) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <SideBar></SideBar>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;