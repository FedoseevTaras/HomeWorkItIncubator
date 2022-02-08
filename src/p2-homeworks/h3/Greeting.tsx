import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)
    const buttonDisabled = error? true:false
    return (
        <div className={s.greeting}>
            <SuperInputText value={name} onChange={setNameCallback} className={`${s.someClass} ${inputClass}`} error={error}/>
            <div className={s.wrapperButtonCount}>
                <SuperButton onClick={addUser} className={s.button} disabled={buttonDisabled}>add</SuperButton>
                <span className={s.countUsers}>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
