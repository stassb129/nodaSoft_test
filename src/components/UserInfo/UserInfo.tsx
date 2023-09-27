import React, {FC} from 'react';
import {User} from "../../types/type";
import style from "./userInfo.module.scss";

interface IUserInfoProps {
    user: User | null;
}

const UserInfo: FC<IUserInfoProps> = React.memo(({user}: IUserInfoProps): JSX.Element => {
    if (!user) {
        return <p className={style.noUser}>There is no user...</p>;
    }

    return (
        <table className={style.userInfo}>
            <thead>
            <tr>
                <th>Username</th>
                <th>Phone number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
            </tr>
            </tbody>
        </table>
    );
});

export default UserInfo;
