import React from "react";
import style from "../StatItem/StatItem.module.scss";

const StatItem = (props) =>{
    const {statname, statvalue} = props;
    return (
        <div className={style.statItemContainer}>
            <div className={style.statName}>{statname}:</div>
            <div className={style.statValue}>{statvalue}</div>
        </div>
    );
}

export default StatItem;