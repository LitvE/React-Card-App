import React from "react";
import StatItem from "../StatItem";
import style from "../Tagline/Tagline.module.scss";


const Tagline = (props) => {
    return (
        <div className={style.UserStatItem}>
            <StatItem statname={'Tweets'} statvalue={'1,377'}/>
            <StatItem statname={'Following'} statvalue={'561'}/>
            <StatItem statname={'Followers'} statvalue={'718'}/>
        </div>
    );
}

export default Tagline;