import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

/**
 * Тег который выводид информацию о имени пользователя 
 * и изменяет адрес строки на его номер ID
 * 
 * @param {name, id} props 
 */
const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;

  return <div className={s.dialog}>
    <NavLink to={path} activeClassName={s.active}>
      {props.name}
    </NavLink>
  </div >
}
/**
 * 
 * @param {message} props Сообщение
 */
const Message = (props) => {
  return <div className={s.meassage}>{props.message}</div>
}

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrei' },
    { id: 3, name: 'Marina' },
    { id: 4, name: 'Pety' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Victor' },
    { id: 7, name: 'Misha' }
  ]

  let messagesData = [
    { id: 1, message: 'Test' },
    { id: 2, message: 'Wrewr' },
    { id: 3, message: 'adfadf' },
    { id: 4, message: '342342' },
    { id: 5, message: 'hggg' },
    { id: 6, message: 'Victor' },
    { id: 7, message: 'Hi world' }
  ]


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />


      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
      </div>
    </div >
  );

}

export default Dialogs;
