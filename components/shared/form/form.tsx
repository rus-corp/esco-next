'use client'

import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import style from './form.module.css'



type formDateType = {
  clientName: string,
  phone: number
}


export default function Form() {
  const [formData, setformData] = useState({
    clientName: '',
    phone: ''
  })

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setformData({...formData, clientName: event.target.value})
  }

  function handlePhone(event: ChangeEvent<HTMLInputElement>) {
    setformData({...formData, phone: event.target.value})
  }

  function handleSubmit() {
    console.log(formData)
  }

  return(
    <section className={style.help}>
      <div className={style.container}>
        <div className={`${style.main_help} ${style.image_container}`}>
          <img className={style.image} src="./background_img/form_door.jpg" alt="" />
        </div>
        <div className={`${style.main_help} ${style.text_container}`}>
          <h2>Нужна помощь с выбором?</h2>
          <p>Наши специалисты с радостью помогут Вам, оставьте свой номер телефона!</p>
          <form className={style.form_container} onSubmit={handleSubmit}>
            <div className={style.input_fields}>
              <input className={style.input_field} type="text" placeholder='Как вас зовут?' onChange={handleName}/>
              <input className={style.input_field} type="text" placeholder='Ваш телефон' onChange={handlePhone}/>
            </div>
            <button className={style.form_btn} type="submit">Связаться с нами</button>
          </form>
          <div className={style.form__callback}>
            <a className={style.form_callback} href="">Или свяжитесь с нами по телефону <br></br>8-800-222-22-22</a>
          </div>
        </div>
      </div>
    </section>
  );
}