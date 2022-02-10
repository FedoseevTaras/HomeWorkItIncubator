import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./RoutesComponent";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.wrapper}>

            <NavLink to={PATH.PRE_JUNIOR}  className={navData => navData.isActive ? s.active : s.link}>
                <div className={s.preJun}>pre-junior</div>
            </NavLink>
            <NavLink to={PATH.JUNIOR} className={navData => navData.isActive ? s.active : s.link}>
                <div className={s.jun}>junior</div>
            </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={navData => navData.isActive ? s.active : s.link}>
                <div className={s.junPlus}>junior+</div>
            </NavLink>
            <div className={s.menuTransformer}></div>

        </div>
    )
}

export default Header
