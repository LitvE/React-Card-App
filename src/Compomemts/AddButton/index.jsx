import React from "react";
import style from '../AddButton/AddButton.module.scss';

const AddButton = (props) =>{
    return (
        <div>
            <button className={style.myButton}>+</button>
        </div>
    );
}

export default AddButton;