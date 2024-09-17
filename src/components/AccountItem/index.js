import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/44c27da0acec97b1ca9b4035f317a662.jpeg?lk3s=a5d48078&nonce=86343&refresh_token=fe6c37a11f312314a5fba177fe177ab0&x-expires=1725699600&x-signature=TV3tuHVRrGymDS1pd%2FjqwZMOu9U%3D&shp=a5d48078&shcp=81f88b70" alt="Hoa"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}>

                    </FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;