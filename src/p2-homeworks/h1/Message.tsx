import React from 'react'
import styles from "./Message.module.css"

export type MassagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message (props:MassagePropsType) {
    return (
        <div className = {styles.item}>
            <img src={props.avatar} alt=""/>
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.message}>
                    {props.message}
                </div>
                <div className={styles.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
