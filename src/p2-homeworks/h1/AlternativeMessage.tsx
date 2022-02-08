import React from 'react'
import {MassagePropsType} from "./Message";
import styles from "./AlternativeMessage.module.css"


const AlternativeMessage: React.FC<MassagePropsType> = ({avatar,name,message,time}) => {
    return (
        <div className={styles.item}>
            <img src={avatar} alt="" />
            <div className={styles.angle}></div>
            <div className = {styles.wrapper}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.message}>
                    {message}
                </div>
                <div className={styles.time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
