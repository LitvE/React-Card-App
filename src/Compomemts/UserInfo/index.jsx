import React from "react";
import style from "./UserInfo.module.scss";

const UserInfo = (props) => {
    const {name, surname, address} = props;
    return (
        <div className={style.userInfoContainer}>
            <div>{name} {surname}</div>
            <div className={style.userAddress}>{address}</div>
        </div>
   
    );
}

export default UserInfo;