import React, { useCallback, useEffect } from "react";
import './Form.css'
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import WebApp from "@twa-dev/sdk";

const Form = (props) => {
    const [country, setCounty] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(()=>{
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [])

    useEffect(()=>{
        tg.MainButton.setParams({
            text:'Отправить данные'
        })
    }, [])

    useEffect(()=>{
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show();
        }
    },[country, street])

    let onChangeCountry = (e) => {
        setCounty(e.target.value)
    }

    let onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    let onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry} />
            <input
                className="input"
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet} />
            <select  className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Физ.лицо</option>
                <option value={'legal'}>Юр.лицо</option>
            </select>    
        </div>
    )
}

export default Form;