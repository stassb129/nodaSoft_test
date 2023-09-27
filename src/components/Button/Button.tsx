import React from 'react';
import style from './button.module.scss';

interface IButtonProps {
    onClick: () => void;
    disabled?: boolean;
}


const Button = ({onClick, disabled}: IButtonProps): JSX.Element => {
    return (
        <button disabled={disabled} className={style.button} type="button" onClick={onClick}>
            Get random user
        </button>
    );
}

export default Button;