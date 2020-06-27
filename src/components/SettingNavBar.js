import React from "react";
import '../css/SettingNavBar.css'
import SettingNavItem from "./SettingNavItem";
import Button from './Button'
import UserConfirmation from './UserConfirmation'
import { fetchJSON } from '../utilities/fetchData'
import AlertBox from './AlertBox'
import { useHistory } from "react-router-dom";

const SettingNavBar = ({ items, selected = items[0], handleSelect }) => {
  const history = useHistory();

  let navItem = items.map((item) => (
    <SettingNavItem
      key={item}
      text={item}
      handleClick={() => {
        handleSelect(item);
      }}
      selected={item === selected}
    />
  ));
  const deleteData = () => {
    fetchJSON('/settings/deleteinfo', null, (data) => {
      AlertBox({ text: data.msg, success: data.status })
    })
  }

  return <nav id="SettingNavBar">
    {navItem}
    <Button
      buttonText='Radera mitt konto'
      className='rejectButton'
      handleClick={() => {
        AlertBox({
          text: 'Varning!\n Du kommer inte kunna få tillbaka ditt konto.',
          success: false,
          confirmAction: () =>
            UserConfirmation(
              {
                text: 'Är du säker på att du vill radera ditt konto?', confirmAction: () => {
                  deleteData();
                  localStorage.removeItem('sessionId');
                  history.push('/logout');
                }
              })
        })
      }} />
  </nav>;
};

export default SettingNavBar;