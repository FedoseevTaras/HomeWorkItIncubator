import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Taras',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at dolore, dolorem dolorum fuga id labore provident repellat. Ex exercitationem illo ipsam. A accusamus accusantium animi aperiam doloremque',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div className={s.title}>homeworks 1</div>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage {...messageData}/>
            <hr/>
        </div>
    );
}

export default HW1
