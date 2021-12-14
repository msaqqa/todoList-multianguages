import React from 'react';
import "./Header.css";
import { useTranslation } from "react-i18next";
import changeLanguage from '../../utils/changeLanguage';

export default function Header({title}) {
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = ()=>{
        changeLanguage(i18n.language==='en'?"ar":'en', i18n)
    }
    return <div className='todo-footer'>
        <h1 className="header">{title}</h1>
        <button className='btn btn-dark' onClick={handleChangeLanguage}>{t('language')}</button>
    </div>
}
