import React from "react";
import Button from "../Button/Button";
import WebApp from "@twa-dev/sdk";
import { useTelegram } from "../../hooks/useTelegram";

const Header = (props) => {
    let {user, onClose } = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    )
}

export default Header;