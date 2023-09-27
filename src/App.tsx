import React, {useState, useEffect, useCallback} from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import {User} from "./types/type";
import Button from "./components/Button/Button";
import {receiveRandomUser} from "./API/getUser";
import {useThrottle} from "./hooks/useThrottle";
import Header from "./components/Header/Header";
import './App.scss';


function App(): JSX.Element {
    const [item, setItem] = useState<User | null>(null);

    const getRandomUser = async () => {
        const user = await receiveRandomUser();
        setItem(user)
    };

    const {throttledFn: throttledReceiveRandomUser, canCall} = useThrottle(
        getRandomUser,
        1000
    );

    const handleButtonClick = () => {
        throttledReceiveRandomUser();
    };

    return (
        <div>
            <Header/>
            <div className="main">
                <Button disabled={!canCall} onClick={handleButtonClick}/>
                <UserInfo user={item}/>
            </div>
        </div>
    );
}

export default App;
