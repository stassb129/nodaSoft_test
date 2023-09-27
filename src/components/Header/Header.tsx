import React, {FC} from 'react';
import style from './header.module.scss';

const Header: FC = () => {
    return (
        <header className={style.header}>
            Application to get a random user
        </header>
    );
};

export default Header;